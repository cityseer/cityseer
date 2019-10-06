(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cityseer-util-plot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cityseer-util-plot","aria-hidden":"true"}},[t._v("#")]),t._v(" cityseer.util.plot")]),t._v(" "),s("p",[t._v("Convenience functions for basic plotting. This module is predominately used for basic plots or visual verification of behaviour in code tests. Custom behaviour can be achieved by directly manipulating the underlying "),s("a",{attrs:{href:"https://networkx.github.io",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("NetworkX")]),s("OutboundLink")],1),t._v(" / "),s("a",{attrs:{href:"https://matplotlib.org",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("matplotlib")]),s("OutboundLink")],1),t._v(" figures.")]),t._v(" "),s("h2",{attrs:{id:"plot-nx-primal-or-dual"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plot-nx-primal-or-dual","aria-hidden":"true"}},[t._v("#")]),t._v(" plot_nX_primal_or_dual")]),t._v(" "),s("FuncSignature",[s("pre",[t._v("plot_nX_primal_or_dual(primal=None,\n                       dual=None,\n                       path=None,\n                       labels=False,\n                       primal_colour=None,\n                       dual_colour=None,\n                       **figure_kwargs)\n")])]),t._v(" "),s("p",[t._v("Plot either or both primal and dual representations of "),s("code",[t._v("networkX")]),t._v(" graphs.")]),t._v(" "),s("FuncHeading",[t._v("Parameters")]),t._v(" "),s("FuncElement",{attrs:{name:"primal",type:"nx.Graph"}},[s("p",[t._v("An optional "),s("code",[t._v("NetworkX")]),t._v(" graph to plot in the primal representation.")])]),t._v(" "),s("FuncElement",{attrs:{name:"dual",type:"nx.Graph"}},[s("p",[t._v("An optional "),s("code",[t._v("NetworkX")]),t._v(" graph to plot in the dual representation.")])]),t._v(" "),s("FuncElement",{attrs:{name:"path",type:"str"}},[s("p",[t._v("An optional filepath: if provided, the image will be saved to the path instead of being displayed.")])]),t._v(" "),s("FuncElement",{attrs:{name:"labels",type:"bool"}},[s("p",[t._v("Whether to display node labels.")])]),t._v(" "),s("FuncElement",{attrs:{name:"primal_colour",type:"str, list, tuple, np.ndarray"}},[s("p",[t._v("Primal node colour or colours. When passing a list of colours, the number of colours should match the order and number of nodes in the graph. The colours are passed to the underlying "),s("a",{attrs:{href:"https://networkx.github.io/documentation/networkx-1.10/reference/generated/networkx.drawing.nx_pylab.draw_networkx.html#draw-networkx",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("draw_networkx")]),s("OutboundLink")],1),t._v(" method and should be formatted accordingly.")])]),t._v(" "),s("FuncElement",{attrs:{name:"dual_colour",type:"str, list, tuple, np.ndarray"}},[s("p",[t._v("Dual node colour or colours. When passing a list of colours, the number of colours should match the order and number of nodes in the graph. The colours are passed to the underlying "),s("a",{attrs:{href:"https://networkx.github.io/documentation/networkx-1.10/reference/generated/networkx.drawing.nx_pylab.draw_networkx.html#draw-networkx",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("draw_networkx")]),s("OutboundLink")],1),t._v(" method and should be formatted accordingly.")])]),t._v(" "),s("FuncElement",{attrs:{name:"figure_kwargs",type:"key=value pairs"}},[s("p",[s("code",[t._v("key=value")]),t._v(" pairs which will be passed to the "),s("code",[t._v("matplotlib")]),t._v(" figure parameters. If provided, these "),s("code",[t._v("kwargs")]),t._v(" are used to override the default figure size or dpi parameters.")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cityseer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" graphs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plot\n\nG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mock_graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nG_simple "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nX_simple_geoms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nG_dual "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nX_to_dual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G_simple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot_nX_primal_or_dual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G_simple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" G_dual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("img",{staticClass:"centre",staticStyle:{"max-height":"450px"},attrs:{src:e(16),alt:"Example dual graph"}}),t._v(" "),s("p",[s("em",[t._v("Dual graph (blue) overlaid on the source primal graph (red).")])]),t._v(" "),s("h2",{attrs:{id:"plot-nx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plot-nx","aria-hidden":"true"}},[t._v("#")]),t._v(" plot_nX")]),t._v(" "),s("FuncSignature",[s("pre",[t._v("plot_nX(networkX_graph,\n        path=None,\n        labels=False,\n        colour=None,\n        **figure_kwargs)\n")])]),t._v(" "),s("p",[t._v("Plot a "),s("code",[t._v("networkX")]),t._v(" graph.")]),t._v(" "),s("FuncHeading",[t._v("Parameters")]),t._v(" "),s("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[s("p",[t._v("A "),s("code",[t._v("NetworkX")]),t._v(" graph.")])]),t._v(" "),s("FuncElement",{attrs:{name:"path",type:"str"}},[s("p",[t._v("An optional filepath: if provided, the image will be saved to the path instead of being displayed.")])]),t._v(" "),s("FuncElement",{attrs:{name:"labels",type:"bool"}},[s("p",[t._v("Whether to display node labels.")])]),t._v(" "),s("FuncElement",{attrs:{name:"colour",type:"str, list, tuple, np.ndarray"}},[s("p",[t._v("Node colour or colours. When passing a list of colours, the number of colours should match the order and number of nodes in the graph. The colours are passed to the underlying "),s("a",{attrs:{href:"https://networkx.github.io/documentation/networkx-1.10/reference/generated/networkx.drawing.nx_pylab.draw_networkx.html#draw-networkx",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("draw_networkx")]),s("OutboundLink")],1),t._v(" method and should be formatted accordingly.")])]),t._v(" "),s("FuncElement",{attrs:{name:"figure_kwargs",type:"key=value pairs"}},[s("p",[s("code",[t._v("key=value")]),t._v(" pairs which will be passed to the "),s("code",[t._v("matplotlib")]),t._v(" figure parameters. If provided, these "),s("code",[t._v("kwargs")]),t._v(" are used to override the default figure size or dpi parameters.")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cityseer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" graphs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plot\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cityseer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" networks\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" matplotlib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" colors\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate a graph and compute gravity")]),t._v("\nG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mock_graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nX_simple_geoms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nX_decompose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" networks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network_Layer_From_nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distances"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gravity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nG_after "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_networkX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# let's extract and normalise the values")]),t._v("\nvals "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" G_after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    vals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metrics'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'centrality'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gravity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# let's create a custom colourmap using matplotlib")]),t._v("\ncmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LinearSegmentedColormap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cityseer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#64c1ff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#d32f2f'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# normalise the values")]),t._v("\nvals "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Normalize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cast against the colour map")]),t._v("\ncols "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plot")]),t._v("\nplot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot_nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G_after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colour"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cols"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("img",{staticClass:"centre",staticStyle:{"max-height":"450px"},attrs:{src:e(71),alt:"Example colour plot"}}),t._v(" "),s("p",[s("em",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"8"}}),s("mjx-c",{attrs:{c:"0"}}),s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1)],1)],1),t._v(" gravity colour plot on a "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"5"}}),s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1)],1)],1),t._v(" decomposed graph.")],1)]),t._v(" "),s("h2",{attrs:{id:"plot-assignment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plot-assignment","aria-hidden":"true"}},[t._v("#")]),t._v(" plot_assignment")]),t._v(" "),s("FuncSignature",[s("pre",[t._v("plot_assignment(Network_Layer, \n                Data_Layer,\n                path=None,\n                node_colour=None,\n                node_labels=False,\n                data_labels=None)\n")])]),t._v(" "),s("p",[t._v("Plot a "),s("code",[t._v("Network_Layer")]),t._v(" and "),s("code",[t._v("Data_Layer")]),t._v(" for the purpose of visualising assignment of data points to respective nodes.")]),t._v(" "),s("FuncHeading",[t._v("Parameters")]),t._v(" "),s("FuncElement",{attrs:{name:"Network_Layer",type:"networks.Network_Layer"}},[s("p",[t._v("A "),s("router-link",{attrs:{to:"/metrics/networks.html#network-layer"}},[s("code",[t._v("Network_Layer")])]),t._v(".")],1)]),t._v(" "),s("FuncElement",{attrs:{name:"Data_Layer",type:"layers.Data_Layer"}},[s("p",[t._v("A "),s("router-link",{attrs:{to:"/metrics/layers.html#data-layer"}},[s("code",[t._v("Data_Layer")])]),t._v(".")],1)]),t._v(" "),s("FuncElement",{attrs:{name:"path",type:"str"}},[s("p",[t._v("An optional filepath: if provided, the image will be saved to the path instead of being displayed.")])]),t._v(" "),s("FuncElement",{attrs:{name:"node_colour",type:"str, list, tuple, np.ndarray"}},[s("p",[t._v("Node colour or colours. When passing a list of colours, the number of colours should match the order and number of nodes in the graph. The colours are passed to the underlying "),s("a",{attrs:{href:"https://networkx.github.io/documentation/networkx-1.10/reference/generated/networkx.drawing.nx_pylab.draw_networkx.html#draw-networkx",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("draw_networkx")]),s("OutboundLink")],1),t._v(" method and should be formatted accordingly.")])]),t._v(" "),s("FuncElement",{attrs:{name:"node_labels",type:"bool"}},[s("p",[t._v("Whether to plot the node labels.")])]),t._v(" "),s("FuncElement",{attrs:{name:"data_labels",type:"list, tuple, np.ndarray"}},[s("p",[t._v("An optional iterable of categorical data labels which will be mapped to colours. The number of labels should match the number of data points in "),s("code",[t._v("Data_Layer")]),t._v(".")])]),t._v(" "),s("img",{staticClass:"centre",staticStyle:{"max-height":"450px"},attrs:{src:e(72),alt:"Example assignment plot"}}),t._v(" "),s("p",[s("em",[t._v("An assignment plot to a "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"5"}}),s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1)],1)],1),t._v(" decomposed graph, with the data points coloured by categorical labels.")],1)]),t._v(" "),s("h2",{attrs:{id:"plot-graph-maps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plot-graph-maps","aria-hidden":"true"}},[t._v("#")]),t._v(" plot_graph_maps "),s("Chip",{attrs:{text:"unstable",important:!0}})],1),t._v(" "),s("FuncSignature",[s("pre",[t._v("plot_graph_maps(node_uids,\n                node_map,\n                edge_map,\n                data_map,\n                poly)\n")])]),t._v(" "),s("p",[t._v("Plot a graph from raw "),s("code",[t._v("cityseer")]),t._v(" data structures. Note that this function is subject to frequent revision pending short-term development requirements. It is used mainly to visually confirm the correct behaviour of particular algorithms.")]),t._v(" "),s("FuncHeading",[t._v("Parameters")]),t._v(" "),s("FuncElement",{attrs:{name:"node_uids",type:"[list, tuple, np.ndarray]"}},[s("p",[t._v("An array of node ids.")])]),t._v(" "),s("FuncElement",{attrs:{name:"node_map",type:"np.ndarray"}},[s("p",[s("code",[t._v("cityseer")]),t._v(" node map.")])]),t._v(" "),s("FuncElement",{attrs:{name:"edge_map",type:"np.ndarray"}},[s("p",[s("code",[t._v("cityseer")]),t._v(" edge map.")])]),t._v(" "),s("FuncElement",{attrs:{name:"data_map",type:"np.ndarray"}},[s("p",[t._v("Optional: plot a data map.")])]),t._v(" "),s("FuncElement",{attrs:{name:"poly",type:"shapely.geometry.Polygon"}},[s("p",[t._v("Optional: plot a polygon.")])])],1)},[],!1,null,null,null);a.default=n.exports},16:function(t,a,e){t.exports=e.p+"assets/img/graph_dual.cc46a320.png"},71:function(t,a,e){t.exports=e.p+"assets/img/graph_colour.0414191f.png"},72:function(t,a,e){t.exports=e.p+"assets/img/assignment_plot.24ba7139.png"}}]);