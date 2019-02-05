import copy

import numpy as np
import pytest

from cityseer.algos import checks, centrality
from cityseer.metrics import networks, layers
from cityseer.util import mock, graphs


def test_distance_from_beta():
    # some basic checks - using float form
    assert networks.distance_from_beta(-0.04) == np.array([100.])
    assert networks.distance_from_beta(-0.0025) == np.array([1600.])
    # check that custom min_threshold_wt works
    arr = networks.distance_from_beta(-0.04, min_threshold_wt=0.001)
    assert np.array_equal(arr, np.array([172.69388197455342]))
    # check on array form
    arr = networks.distance_from_beta([-0.04, -0.0025])
    assert np.array_equal(arr, np.array([100, 1600]))
    # check that invalid beta types raises an error
    with pytest.raises(TypeError):
        networks.distance_from_beta('boo')
    # check that positive betas raise an error
    with pytest.raises(ValueError):
        networks.distance_from_beta(0.04)


def test_Network_Layer():
    G = mock.mock_graph()
    G = graphs.nX_simple_geoms(G)
    G = graphs.nX_auto_edge_params(G)

    # manual graph maps for comparison
    node_uids, node_map, edge_map = graphs.graph_maps_from_nX(G)
    x_arr = node_map[:, 0]
    y_arr = node_map[:, 1]
    betas = [-0.02, -0.005]
    distances = networks.distance_from_beta(betas)

    # test Network_Layer's class
    for d, b in zip([distances, None], [None, betas]):
        for angular in [True, False]:
            N = networks.Network_Layer(node_uids,
                                       node_map,
                                       edge_map,
                                       distances=d,
                                       betas=b,
                                       angular=angular)
            assert np.array_equal(N.uids, node_uids)
            assert np.allclose(N._nodes, node_map, equal_nan=True)
            assert np.array_equal(N._edges, edge_map)
            assert np.array_equal(N.distances, distances)  # inferred automatically when only betas provided
            assert np.array_equal(N.betas, betas)  # inferred automatically when only distances provided
            assert N.min_threshold_wt == checks.def_min_thresh_wt
            assert N.angular == angular
            assert np.array_equal(N.x_arr, x_arr)
            assert np.array_equal(N.y_arr, y_arr)
            assert np.array_equal(N.live, node_map[:, 2])
            assert np.array_equal(N.edge_lengths, edge_map[:, 2])
            assert np.array_equal(N.edge_impedances, edge_map[:, 3])

    # test round-trip graph to and from Network_Layer
    N = networks.Network_Layer(node_uids, node_map, edge_map, distances=distances)
    G_round_trip = N.to_networkX()
    # graph_maps_from_networkX generates implicit live (all True) and weight (all 1) attributes if missing
    # i.e. can't simply check that all nodes equal, so check properties manually
    for n, d in G.nodes(data=True):
        assert n in G_round_trip
        assert G_round_trip.nodes[n]['x'] == d['x']
        assert G_round_trip.nodes[n]['y'] == d['y']
    # edges can be checked en masse
    assert G_round_trip.edges == G.edges

    # check alternate min_threshold_wt gets passed through successfully
    alt_min = 0.02
    alt_distances = networks.distance_from_beta(betas, min_threshold_wt=alt_min)
    N = networks.Network_Layer(node_uids,
                               node_map,
                               edge_map,
                               betas=betas,
                               min_threshold_wt=alt_min)
    assert np.array_equal(N.distances, alt_distances)

    # check for malformed signatures
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids[:-1], node_map, edge_map, distances)
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids, node_map[:, :-1], edge_map, distances)
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids, node_map, edge_map[:, :-1], distances)
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids, node_map, edge_map)  # no betas or distances
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids, node_map, edge_map, distances=None, betas=None)
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids, node_map, edge_map, distances=[])
    with pytest.raises(ValueError):
        networks.Network_Layer(node_uids, node_map, edge_map, betas=[])


def test_Network_Layer_From_nX():
    G = mock.mock_graph()
    G = graphs.nX_simple_geoms(G)
    G = graphs.nX_auto_edge_params(G)
    node_uids, node_map, edge_map = graphs.graph_maps_from_nX(G)
    x_arr = node_map[:, 0]
    y_arr = node_map[:, 1]
    betas = np.array([-0.04, -0.02])
    distances = networks.distance_from_beta(betas)

    # test Network_Layer_From_NetworkX's class
    for d, b in zip([distances, None], [None, betas]):
        for angular in [True, False]:
            N = networks.Network_Layer_From_nX(G, distances=d, betas=b, angular=angular)
            assert np.array_equal(N.uids, node_uids)
            assert np.allclose(N._nodes, node_map, equal_nan=True)
            assert np.array_equal(N._edges, edge_map)
            assert np.array_equal(N.distances, distances)  # inferred automatically when only betas provided
            assert np.array_equal(N.betas, betas)  # inferred automatically when only distances provided
            assert N.min_threshold_wt == checks.def_min_thresh_wt
            assert N.angular == angular
            assert np.array_equal(N.x_arr, x_arr)
            assert np.array_equal(N.y_arr, y_arr)
            assert np.array_equal(N.live, node_map[:, 2])
            assert np.array_equal(N.edge_lengths, edge_map[:, 2])
            assert np.array_equal(N.edge_impedances, edge_map[:, 3])

    # check alternate min_threshold_wt gets passed through successfully
    alt_min = 0.02
    alt_distances = networks.distance_from_beta(betas, min_threshold_wt=alt_min)
    N = networks.Network_Layer_From_nX(G, betas=betas, min_threshold_wt=alt_min)
    assert np.array_equal(N.distances, alt_distances)

    # check for malformed signatures
    with pytest.raises(TypeError):
        networks.Network_Layer_From_nX('boo', distances=distances)
    with pytest.raises(ValueError):
        networks.Network_Layer_From_nX(G)  # no betas or distances
    with pytest.raises(ValueError):
        networks.Network_Layer_From_nX(G, distances=None, betas=None)
    with pytest.raises(ValueError):
        networks.Network_Layer_From_nX(G, distances=[])
    with pytest.raises(ValueError):
        networks.Network_Layer_From_nX(G, betas=[])


def dict_check(m_dict, Network):

    for i, uid in enumerate(Network.uids):
        assert m_dict[uid]['x'] == Network._nodes[i][0]
        assert m_dict[uid]['y'] == Network._nodes[i][1]
        assert m_dict[uid]['live'] == Network._nodes[i][2]
        assert m_dict[uid]['weight'] == Network._nodes[i][4]

        for c_key, c_val in Network.metrics['centrality'].items():
            for d_key, d_val in c_val.items():
                assert d_val[i] == m_dict[uid]['centrality'][c_key][d_key]

        for mu_key, mu_val in Network.metrics['mixed_uses'].items():
            if 'hill' in mu_key:
                for q_key, q_val in mu_val.items():
                    for d_key, d_val in q_val.items():
                        assert d_val[i] == m_dict[uid]['mixed_uses'][mu_key][q_key][d_key]
            else:
                for d_key, d_val in mu_val.items():
                    assert d_val[i] == m_dict[uid]['mixed_uses'][mu_key][d_key]

        for cat in ['non_weighted', 'weighted']:
            if cat not in Network.metrics['accessibility']:
                continue
            for cl_key, cl_val in Network.metrics['accessibility'][cat].items():
                for d_key, d_val in cl_val.items():
                    assert d_val[i] == m_dict[uid]['accessibility'][cat][cl_key][d_key]

        for th_key, th_val in Network.metrics['stats'].items():
            for stat_key, stat_val in th_val.items():
                for d_key, d_val in stat_val.items():
                    # some NaN so use np.allclose
                    assert np.allclose(d_val[i], m_dict[uid]['stats'][th_key][stat_key][d_key], equal_nan=True)

def test_metrics_to_dict():
    G = mock.mock_graph()
    G = graphs.nX_simple_geoms(G)
    G = graphs.nX_auto_edge_params(G)
    # create a network layer and run some metrics
    N = networks.Network_Layer_From_nX(G, distances=[500, 1000])

    # check with no metrics
    metrics_dict = N.metrics_to_dict()
    dict_check(metrics_dict, N)

    # check with centrality metrics
    N.harmonic_closeness()
    N.betweenness()
    metrics_dict = N.metrics_to_dict()
    dict_check(metrics_dict, N)

    # check with data metrics
    data_dict = mock.mock_data_dict(G)
    landuse_labels = mock.mock_categorical_data(len(data_dict))
    numerical_data = mock.mock_numerical_data(len(data_dict))
    D = layers.Data_Layer_From_Dict(data_dict)
    D.assign_to_network(N, max_dist=400)
    D.compute_aggregated(landuse_labels,
                         mixed_use_keys=['hill', 'shannon'],
                         accessibility_keys=['a', 'c'],
                         qs=[0, 1],
                         stats_keys=['boo'],
                         stats_data_arrs=numerical_data)
    metrics_dict = N.metrics_to_dict()
    dict_check(metrics_dict, N)


def test_to_networkX():
    # also see test_graphs.test_networkX_from_graph_maps for underlying graph maps version

    # check round trip to and from graph maps results in same graph
    G = mock.mock_graph()
    G = graphs.nX_simple_geoms(G)
    G = graphs.nX_auto_edge_params(G)
    # explicitly set live and weight params for equality checks
    # graph_maps_from_networkX generates these implicitly if missing
    for n in G.nodes():
        G.nodes[n]['live'] = bool(np.random.randint(0, 1))
        G.nodes[n]['weight'] = np.random.random() * 2000

    # add random data to check persistence at other end
    G.nodes[0]['boo'] = 'baa'
    G[0][1]['baa'] = 'boo'

    # test with metrics
    N = networks.Network_Layer_From_nX(G, distances=[500])
    N.harmonic_closeness()
    N.betweenness()
    metrics_dict = N.metrics_to_dict()
    G_round_trip = N.to_networkX()
    for n, d in G.nodes(data=True):
        assert G_round_trip.nodes[n]['x'] == d['x']
        assert G_round_trip.nodes[n]['y'] == d['y']
        assert G_round_trip.nodes[n]['live'] == d['live']
        assert G_round_trip.nodes[n]['weight'] == d['weight']
    for s, e, d in G.edges(data=True):
        assert G_round_trip[s][e]['geom'] == d['geom']
        assert G_round_trip[s][e]['length'] == d['length']
        assert G_round_trip[s][e]['impedance'] == d['impedance']
    # check that metrics came through
    for uid, metrics in metrics_dict.items():
        assert G_round_trip.nodes[uid]['metrics'] == metrics
    # check data persistence
    assert G_round_trip.nodes[0]['boo'] == 'baa'
    assert G_round_trip[0][1]['baa'] == 'boo'


def test_compute_centrality():
    '''
    Underlying method also tested via test_networks.test_network_centralities
    '''

    G = mock.mock_graph()
    G = graphs.nX_simple_geoms(G)
    G = graphs.nX_auto_edge_params(G)

    betas = np.array([-0.01, -0.005])
    distances = networks.distance_from_beta(betas)
    N = networks.Network_Layer_From_nX(G, distances)
    node_map = N._nodes
    edge_map = N._edges

    # check single closeness and betweenness independently against underlying
    N_temp = copy.deepcopy(N)
    N_temp.compute_centrality(close_metrics=['node_density'])
    # test against underlying method
    cl_data, bt_data = centrality.local_centrality(node_map,
                                                   edge_map,
                                                   distances,
                                                   betas,
                                                   closeness_keys=np.array([0]))
    for d_idx, d_key in enumerate(distances):
        assert np.array_equal(N_temp.metrics['centrality']['node_density'][d_key], cl_data[0][d_idx])

    N_temp = copy.deepcopy(N)
    N_temp.compute_centrality(between_metrics=['betweenness'])
    # test against underlying method
    cl_data, bt_data = centrality.local_centrality(node_map,
                                                   edge_map,
                                                   distances,
                                                   betas,
                                                   betweenness_keys=np.array([0]))
    for d_idx, d_key in enumerate(distances):
        assert np.array_equal(N_temp.metrics['centrality']['betweenness'][d_key], bt_data[0][d_idx])

    # also check the number of returned types for a few assortments of metrics
    closeness_types = np.array(['node_density',
                                'farness_impedance',
                                'farness_distance',
                                'harmonic',
                                'improved',
                                'gravity',
                                'cycles'])
    betweenness_types = np.array(['betweenness', 'betweenness_gravity'])

    cl_random = np.arange(len(closeness_types))
    np.random.shuffle(cl_random)

    bt_random = np.arange(len(betweenness_types))
    np.random.shuffle(bt_random)

    # not necessary to do all labels, first few should do
    for cl_min in range(3):
        cl_keys = np.array(cl_random[cl_min:])

        for bt_min in range(3):
            bt_keys = np.array(bt_random[bt_min:])

            # in the final case, set betweenness to a single key otherwise an error would be raised
            if len(cl_keys) == 0 and len(bt_keys) == 0:
                bt_keys = np.array([0])

            # randomise order of keys and metrics
            cl_metrics = closeness_types[cl_keys]
            bt_metrics = betweenness_types[bt_keys]

            N_temp = copy.deepcopy(N)
            N_temp.compute_centrality(close_metrics=cl_metrics, between_metrics=bt_metrics)
            # test against underlying method
            cl_data, bt_data = centrality.local_centrality(node_map,
                                                           edge_map,
                                                           distances,
                                                           betas,
                                                           closeness_keys=cl_keys,
                                                           betweenness_keys=bt_keys)
            for cl_idx, cl_m in enumerate(cl_metrics):
                for d_idx, d_key in enumerate(distances):
                    assert np.array_equal(N_temp.metrics['centrality'][cl_m][d_key], cl_data[cl_idx][d_idx])

            for bt_idx, bt_m in enumerate(bt_metrics):
                for d_idx, d_key in enumerate(distances):
                    assert np.array_equal(N_temp.metrics['centrality'][bt_m][d_key], bt_data[bt_idx][d_idx])

    # check that angular gets passed through
    G_dual = graphs.nX_to_dual(G)
    N_dual = networks.Network_Layer_From_nX(G_dual, distances=[2000], angular=True)
    N_dual.compute_centrality(close_metrics=['harmonic'], between_metrics=['betweenness'])

    N_dual_sidestep = networks.Network_Layer_From_nX(G_dual, distances=[2000], angular=False)
    N_dual_sidestep.compute_centrality(close_metrics=['harmonic'], between_metrics=['betweenness'])

    assert not np.array_equal(N_dual.metrics['centrality']['harmonic'][2000],
                              N_dual_sidestep.metrics['centrality']['harmonic'][2000])
    assert not np.array_equal(N_dual.metrics['centrality']['betweenness'][2000],
                              N_dual_sidestep.metrics['centrality']['betweenness'][2000])

    # most integrity checks happen in underlying method, though check here for typos
    with pytest.raises(ValueError):
        N.compute_centrality(close_metrics=['spelling_typo'])
    with pytest.raises(ValueError):
        N.compute_centrality(between_metrics=['spelling_typo'])


def network_generator():
    for betas in [[-0.008], [-0.008, -0.002]]:
        distances = networks.distance_from_beta(betas)
        for angular in [False, True]:
            G = mock.mock_graph()
            G = graphs.nX_simple_geoms(G)
            G = graphs.nX_auto_edge_params(G)
            yield G, distances, betas, angular


def test_harmonic_closeness():
    for G, distances, betas, angular in network_generator():

        # easy version
        N_easy = networks.Network_Layer_From_nX(G, distances, angular=angular)
        N_easy.harmonic_closeness()
        # custom version
        N_full = networks.Network_Layer_From_nX(G, distances, angular=angular)
        N_full.compute_centrality(close_metrics=['harmonic'])

        # compare
        for d in distances:
            assert np.array_equal(N_easy.metrics['centrality']['harmonic'][d],
                                  N_full.metrics['centrality']['harmonic'][d])


def test_improved_closeness():
    for G, distances, betas, angular in network_generator():

        # easy version
        N_easy = networks.Network_Layer_From_nX(G, distances, angular=angular)
        N_easy.improved_closeness()
        # custom version
        N_full = networks.Network_Layer_From_nX(G, distances, angular=angular)
        N_full.compute_centrality(close_metrics=['improved'])

        # compare
        for d in distances:
            assert np.array_equal(N_easy.metrics['centrality']['improved'][d],
                                  N_full.metrics['centrality']['improved'][d])


def test_gravity():
    for G, distances, betas, angular in network_generator():

        # DISTANCES
        # easy version
        N_easy = networks.Network_Layer_From_nX(G, distances=distances, angular=angular)
        N_easy.gravity()
        # easy version via betas
        N_easy_betas = networks.Network_Layer_From_nX(G, betas=betas, angular=angular)
        N_easy_betas.gravity()
        # custom version
        N_full = networks.Network_Layer_From_nX(G, distances=distances, angular=angular)
        N_full.compute_centrality(close_metrics=['gravity'])

        # compare
        for d in distances:
            gravity_easy = N_easy.metrics['centrality']['gravity'][d]
            gravity_easy_betas = N_easy_betas.metrics['centrality']['gravity'][d]
            gravity_full = N_full.metrics['centrality']['gravity'][d]
            assert np.array_equal(gravity_easy, gravity_full)
            assert np.array_equal(gravity_easy_betas, gravity_full)


def test_betweenness():
    for G, distances, betas, angular in network_generator():

        # easy version
        N_easy = networks.Network_Layer_From_nX(G, distances, angular=angular)
        N_easy.betweenness()
        # custom version
        N_full = networks.Network_Layer_From_nX(G, distances, angular=angular)
        N_full.compute_centrality(between_metrics=['betweenness'])

        # compare
        for d in distances:
            assert np.array_equal(N_easy.metrics['centrality']['betweenness'][d],
                                  N_full.metrics['centrality']['betweenness'][d])


def test_betweenness_gravity():
    for G, distances, betas, angular in network_generator():

        # DISTANCES
        # easy version
        N_easy = networks.Network_Layer_From_nX(G, distances=distances, angular=angular)
        N_easy.betweenness_gravity()
        # easy version via betas
        N_easy_betas = networks.Network_Layer_From_nX(G, betas=betas, angular=angular)
        N_easy_betas.betweenness_gravity()
        # custom version
        N_full = networks.Network_Layer_From_nX(G, distances=distances, angular=angular)
        N_full.compute_centrality(between_metrics=['betweenness_gravity'])

        # compare
        for d in distances:
            between_gravity_easy = N_easy.metrics['centrality']['betweenness_gravity'][d]
            between_gravity_easy_betas = N_easy_betas.metrics['centrality']['betweenness_gravity'][d]
            between_gravity_full = N_full.metrics['centrality']['betweenness_gravity'][d]
            assert np.array_equal(between_gravity_easy, between_gravity_full)
            assert np.array_equal(between_gravity_easy_betas, between_gravity_full)
