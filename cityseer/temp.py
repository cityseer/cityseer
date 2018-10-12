#%%

import networkx as nx
import matplotlib.pyplot as plt

G = nx.Graph()

nodes = [
    (0, {'x': 700, 'y': 700}),
    (1, {'x': 610, 'y': 780}),
    (2, {'x': 460, 'y': 700}),
    (3, {'x': 520, 'y': 820}),
    (4, {'x': 620, 'y': 905}),
    (5, {'x': 260, 'y': 700}),
    (6, {'x': 320, 'y': 850}),
    (7, {'x': 420, 'y': 880}),
    (8, {'x': 460, 'y': 980}),
    (9, {'x': 580, 'y': 1030}),
    (10, {'x': 70, 'y': 810}),
    (11, {'x': 280, 'y': 980}),
    (12, {'x': 400, 'y': 1030}),
    (13, {'x': 460, 'y': 1130}),
    (14, {'x': 190, 'y': 1050}),
    (15, {'x': 350, 'y': 1200}),
    (16, {'x': 800, 'y': 750}),
    (17, {'x': 800, 'y': 920}),
    (18, {'x': 900, 'y': 820}),
    (19, {'x': 910, 'y': 690}),
    (20, {'x': 905, 'y': 1080}),
    (21, {'x': 1000, 'y': 870}),
    (22, {'x': 1040, 'y': 660}),
    (23, {'x': 1050, 'y': 760}),
    (24, {'x': 1000, 'y': 980}),
    (25, {'x': 1130, 'y': 950}),
    (26, {'x': 1130, 'y': 805}),
    (27, {'x': 1170, 'y': 700}),
    (28, {'x': 1100, 'y': 1200}),
    (29, {'x': 1240, 'y': 990}),
    (30, {'x': 1300, 'y': 760}),
    (31, {'x': 690, 'y': 590}),
    (32, {'x': 570, 'y': 530}),
    (33, {'x': 820, 'y': 500}),
    (34, {'x': 700, 'y': 480}),
    (35, {'x': 490, 'y': 440}),
    (36, {'x': 580, 'y': 360}),
    (37, {'x': 690, 'y': 370}),
    (38, {'x': 920, 'y': 330}),
    (39, {'x': 780, 'y': 300}),
    (40, {'x': 680, 'y': 200}),
    (41, {'x': 560, 'y': 280}),
    (42, {'x': 450, 'y': 300}),
    (43, {'x': 440, 'y': 150}),
    (44, {'x': 650, 'y': 80}),
    (45, {'x': 930, 'y': 110})
]

G.add_nodes_from(nodes)

edges = [
    (0, 1),
    (0, 16),
    (0, 31),
    (1, 2),
    (1, 4),
    (2, 3),
    (2, 5),
    (3, 4),
    (3, 7),
    (4, 9),
    (5, 6),
    (5, 10),
    (6, 7),
    (6, 11),
    (7, 8),
    (8, 9),
    (8, 12),
    (9, 13),
    (10, 14),
    (10, 43),
    (11, 12),
    (11, 14),
    (12, 13),
    (13, 15),
    (14, 15),
    (15, 28),
    (16, 17),
    (16, 19),
    (17, 18),
    (17, 20),
    (18, 19),
    (18, 21),
    (19, 22),
    (20, 24),
    (20, 28),
    (21, 23),
    (21, 24),
    (22, 23),
    (22, 27),
    (23, 26),
    (24, 25),
    (25, 26),
    (25, 29),
    (26, 27),
    (27, 30),
    (28, 29),
    (29, 30),
    (30, 45),
    (31, 32),
    (31, 33),
    (32, 34),
    (32, 35),
    (33, 34),
    (33, 38),
    (34, 37),
    (35, 36),
    (35, 42),
    (36, 37),
    (36, 41),
    (37, 39),
    (38, 39),
    (38, 45),
    (39, 40),
    (40, 41),
    (40, 44),
    (41, 42),
    (42, 43),
    (43, 44),
    (44, 45)
]

G.add_edges_from(edges)

assert G.number_of_nodes() == 46

assert G.number_of_edges() == 69

pos = {}
for n, d in G.nodes(data=True):
    print(n)
    pos[n] = (d['x'], d['y'])

nx.draw(G, pos=pos, with_labels=True)
plt.show()

# neato, dot, twopi, circo, fdp, sfdp
# nop, wc, acyclic, gvpr, gvcolor, ccomps, sccmap, tred, unflatten.