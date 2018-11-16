import pytest
import numpy as np
import networkx as nx
import random
from shapely import geometry
from cityseer import graphs, util
import matplotlib.pyplot as plt


def test_networkX_wgs_to_utm():

    # check that node coordinates are correctly converted
    G_utm, pos = util.tutte_graph()
    G_wgs, pos_wgs = util.tutte_graph(wgs84_coords=True)
    G_converted = graphs.networkX_wgs_to_utm(G_wgs)
    for n, d in G_utm.nodes(data=True):
        assert d['x'] == round(G_converted.nodes[n]['x'], 1)
        assert d['y'] == round(G_converted.nodes[n]['y'], 1)

    # check that edge coordinates are correctly converted
    G_utm, pos = util.tutte_graph()
    G_wgs, pos_wgs = util.tutte_graph(wgs84_coords=True)
    for g in [G_utm, G_wgs]:
        for s, e in g.edges():
            g[s][e]['geom'] = geometry.LineString([
                [g.nodes[s]['x'], g.nodes[s]['y']],
                [g.nodes[e]['x'], g.nodes[e]['y']]
            ])
    G_converted = graphs.networkX_wgs_to_utm(G_wgs)
    for s, e, d in G_utm.edges(data=True):
        assert round(d['geom'].length, 1) == round(G_converted[s][e]['geom'].length, 1)

    # check that non-LineString geoms throw an error
    G_wgs, pos_wgs = util.tutte_graph(wgs84_coords=True)
    for s, e in G_wgs.edges():
        G_wgs[s][e]['geom'] = geometry.Point([G_wgs.nodes[s]['x'], G_wgs.nodes[s]['y']])
    with pytest.raises(ValueError):
        graphs.networkX_wgs_to_utm(G_wgs)

    # check that missing node attributes throw an error
    for attr in ['x', 'y']:
        G_wgs, pos_wgs = util.tutte_graph(wgs84_coords=True)
        for n in G_wgs.nodes():
            # delete attribute from first node and break
            del G_wgs.nodes[n][attr]
            break
        # check that missing attribute throws an error
        with pytest.raises(ValueError):
            graphs.networkX_wgs_to_utm(G_wgs)

    # check that non WGS coordinates throw error
    G_utm, pos = util.tutte_graph()
    with pytest.raises(ValueError):
        graphs.networkX_wgs_to_utm(G_utm)


def test_networkX_decompose():

    # check that missing geoms throw an error
    G, pos = util.tutte_graph()
    with pytest.raises(ValueError):
        graphs.networkX_decompose(G, 20)

    # check that non-LineString geoms throw an error
    G, pos = util.tutte_graph()
    for s, e in G.edges():
        G[s][e]['geom'] = geometry.Point([G.nodes[s]['x'], G.nodes[s]['y']])
    with pytest.raises(ValueError):
        graphs.networkX_decompose(G, 20)

    # test decomposition
    G, pos = util.tutte_graph()
    for s, e in G.edges():
        G[s][e]['geom'] = geometry.LineString([
                [G.nodes[s]['x'], G.nodes[s]['y']],
                [G.nodes[e]['x'], G.nodes[e]['y']]
            ])
    G_decompose = graphs.networkX_decompose(G, 20)
    assert nx.number_of_nodes(G_decompose) == 602
    assert nx.number_of_edges(G_decompose) == 625

    # check that geoms are correctly flipped
    G_forward, pos = util.tutte_graph()
    for s, e in G_forward.edges():
        G_forward[s][e]['geom'] = geometry.LineString([
                [G_forward.nodes[s]['x'], G_forward.nodes[s]['y']],  # start
                [G_forward.nodes[e]['x'], G_forward.nodes[e]['y']]  # end
            ])
    G_forward_decompose = graphs.networkX_decompose(G_forward, 20)

    G_backward, pos = util.tutte_graph()
    for s, e in G_backward.edges():
        G_backward[s][e]['geom'] = geometry.LineString([
                [G_backward.nodes[e]['x'], G_backward.nodes[e]['y']],  # end
                [G_backward.nodes[s]['x'], G_backward.nodes[s]['y']]  # start
            ])
    G_backward_decompose = graphs.networkX_decompose(G_backward, 20)

    for n, d in G_forward_decompose.nodes(data=True):
        assert d['x'] == G_backward_decompose.nodes[n]['x']
        assert d['y'] == G_backward_decompose.nodes[n]['y']

    # test that geom coordinate mismatch throws an error
    G, pos = util.tutte_graph()
    for n in G.nodes():
        G.nodes[n]['x'] = G.nodes[n]['x'] + 1
        break
    with pytest.raises(ValueError):
        graphs.networkX_decompose(G, 20)


def test_networkX_edge_defaults():

    # check that missing geoms throw an error
    G, pos = util.tutte_graph()
    with pytest.raises(ValueError):
        graphs.networkX_edge_defaults(G)

    # check that non-LineString geoms throw an error
    G, pos = util.tutte_graph()
    for s, e in G.edges():
        G[s][e]['geom'] = geometry.Point([G.nodes[s]['x'], G.nodes[s]['y']])
    with pytest.raises(ValueError):
        graphs.networkX_edge_defaults(G)

    # test edge defaults
    G, pos = util.tutte_graph()
    for s, e in G.edges():
        G[s][e]['geom'] = geometry.LineString([
            [G.nodes[s]['x'], G.nodes[s]['y']],
            [G.nodes[e]['x'], G.nodes[e]['y']]
        ])
    G_edge_defaults = graphs.networkX_edge_defaults(G)
    for s, e, d in G.edges(data=True):
        assert d['geom'].length == G_edge_defaults[s][e]['length']
        assert d['geom'].length == G_edge_defaults[s][e]['impedance']


def test_networkX_length_weighted_nodes():

    # check that missing length attribute throws error
    G, pos = util.tutte_graph()
    with pytest.raises(ValueError):
        graphs.networkX_length_weighted_nodes(G)

    # test length weighted nodes
    for s, e in G.edges():
        G[s][e]['geom'] = geometry.LineString([
            [G.nodes[s]['x'], G.nodes[s]['y']],
            [G.nodes[e]['x'], G.nodes[e]['y']]
        ])
    G = graphs.networkX_edge_defaults(G)  # generate edge defaults (includes length attribute)
    G = graphs.networkX_length_weighted_nodes(G)  # generate length weighted nodes
    for n, d in G.nodes(data=True):
        agg_length = 0
        for nb in G.neighbors(n):
            agg_length += G[n][nb]['length'] / 2
        assert d['weight'] == agg_length


def test_graph_maps_from_networkX():

    # template graph
    G_template, pos = util.tutte_graph()
    # add geoms
    for s, e in G_template.edges():
        G_template[s][e]['geom'] = geometry.LineString([
            [G_template.nodes[s]['x'], G_template.nodes[s]['y']],
            [G_template.nodes[e]['x'], G_template.nodes[e]['y']]
        ])

    # test maps vs. networkX
    G_test = G_template.copy()
    G_test = graphs.networkX_edge_defaults(G_test)
    # set some random 'live' statuses
    for n in G_test.nodes():
        G_test.nodes[n]['live'] = bool(random.getrandbits(1))
    # randomise the impedances
    for s, e in G_test.edges():
        G_test[s][e]['impedance'] = G_test[s][e]['impedance'] * random.uniform(0, 2)
    # generate length weighted nodes
    G_test = graphs.networkX_length_weighted_nodes(G_test)
    # generate test maps
    node_labels, node_map, edge_map = graphs.graph_maps_from_networkX(G_test)
    # check lengths
    assert len(node_labels) == len(node_map) == G_test.number_of_nodes()
    assert len(edge_map) == G_test.number_of_edges() * 2
    # check node maps (idx and label match in this case...)
    for n_label in node_labels:
        assert node_map[n_label][0] == G_test.nodes[n_label]['x']
        assert node_map[n_label][1] == G_test.nodes[n_label]['y']
        assert node_map[n_label][2] == G_test.nodes[n_label]['live']
        assert node_map[n_label][4] == G_test.nodes[n_label]['weight']
    # check edge maps (idx and label match in this case...)
    for start, end, length, impedance in edge_map:
        assert length == G_test[start][end]['length']
        assert impedance == G_test[start][end]['impedance']

    # check that missing node attributes throw an error
    G_test = G_template.copy()
    for attr in ['x', 'y']:
        G_test = graphs.networkX_edge_defaults(G_test)
        for n in G_test.nodes():
            # delete attribute from first node and break
            del G_test.nodes[n][attr]
            break
        with pytest.raises(ValueError):
            graphs.graph_maps_from_networkX(G_test)

    # check that missing edge attributes throw an error
    G_test = G_template.copy()
    for attr in ['length', 'impedance']:
        G_test = graphs.networkX_edge_defaults(G_test)
        for s, e in G_test.edges():
            # delete attribute from first edge and break
            del G_test[s][e][attr]
            break
        with pytest.raises(ValueError):
            graphs.graph_maps_from_networkX(G_test)

    # check that invalid lengths are caught
    G_test = G_template.copy()
    G_test = graphs.networkX_edge_defaults(G_test)
    # corrupt length attribute and break
    for corrupt_val in [0, -1, -np.inf, np.nan]:
        for s, e in G_test.edges():
            G_test[s][e]['length'] = corrupt_val
            break
        with pytest.raises(ValueError):
            graphs.graph_maps_from_networkX(G_test)

    # check that invalid impedances are caught
    G_test = G_template.copy()
    G_test = graphs.networkX_edge_defaults(G_test)
    # corrupt impedance attribute and break
    for corrupt_val in [-1, -np.inf, np.nan]:
        for s, e in G_test.edges():
            G_test[s][e]['length'] = corrupt_val
            break
        with pytest.raises(ValueError):
            graphs.graph_maps_from_networkX(G_test)