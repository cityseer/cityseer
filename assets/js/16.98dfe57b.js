(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{211:function(e,t,a){e.exports=a.p+"assets/img/graph_example.900293e4.png"},233:function(e,t,a){"use strict";a.r(t);var n=a(3),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"cityseer-util-mock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cityseer-util-mock"}},[e._v("#")]),e._v(" cityseer.util.mock")]),e._v(" "),n("p",[e._v("A collection of functions for the generation of mock data. This module is predominately used for writing code tests.")]),e._v(" "),n("h2",{attrs:{id:"mock-graph"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-graph"}},[e._v("#")]),e._v(" mock_graph")]),e._v(" "),n("FuncSignature",[e._v("mock_graph(wgs84_coords=False)")]),e._v(" "),n("p",[e._v("Generates a "),n("code",[e._v("NetworkX")]),e._v(" graph for testing or experimentation purposes.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"wgs84_coords",type:"bool"}},[n("p",[e._v("If set to "),n("code",[e._v("True")]),e._v(", the "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" attributes will be in "),n("a",{attrs:{href:"https://epsg.io/4326",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("WGS84")]),n("OutboundLink")],1),e._v(" geographic coordinates instead of a projected cartesion coordinate system (default).")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"G",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("NetworkX")]),e._v(" graph with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" attributes.")])]),e._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" cityseer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("util "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" graphs\n\nG "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mock_graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("img",{staticClass:"centre",staticStyle:{"max-height":"450px"},attrs:{src:a(211),alt:"Example graph"}}),e._v(" "),n("h2",{attrs:{id:"mock-data-dict"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-data-dict"}},[e._v("#")]),e._v(" mock_data_dict")]),e._v(" "),n("FuncSignature",[e._v("mock_data_dict(G, length=50, random_seed=None)")]),e._v(" "),n("p",[e._v("Generates a dictionary containing mock data for testing or experimentation purposes.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"G",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("NetworkX")]),e._v(" graph with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" attributes. This is used in order to determine the spatial extents of the network. The returned data will be within these extents.")])]),e._v(" "),n("FuncElement",{attrs:{name:"length",type:"int"}},[n("p",[e._v("The number of data elements to return in the dictionary.")])]),e._v(" "),n("FuncElement",{attrs:{name:"random_seed",type:"int"}},[n("p",[e._v("For the use of a specified random seed.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"dict",type:"dict"}},[n("p",[e._v("A dictionary where each entry consists of a "),n("code",[e._v("key")]),e._v(" representing a distinct data point "),n("code",[e._v("uid")]),e._v(", and corresponding "),n("code",[e._v("x")]),e._v(", "),n("code",[e._v("y")]),e._v(" and "),n("code",[e._v("live")]),e._v(" values.")])]),e._v(" "),n("h2",{attrs:{id:"mock-categorical-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-categorical-data"}},[e._v("#")]),e._v(" mock_categorical_data")]),e._v(" "),n("FuncSignature",[e._v("mock_categorical_data(length, num_classes=10, random_seed=None)")]),e._v(" "),n("p",[e._v("Generates a "),n("code",[e._v("numpy")]),e._v(" array containing mock categorical data for testing or experimentation purposes.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"length",type:"int"}},[n("p",[e._v("The number of categorical elements to return in the array.")])]),e._v(" "),n("FuncElement",{attrs:{name:"num_classes",type:"int"}},[n("p",[e._v("The maximum number of unique classes to return in the randomly assigned categorical data. The classes are randomly generated from a pool of unique class labels of length "),n("code",[e._v("num_classes")]),e._v(". The number of returned unique classes will be less than or equal to "),n("code",[e._v("num_classes")]),e._v(".")])]),e._v(" "),n("FuncElement",{attrs:{name:"random_seed",type:"int"}},[n("p",[e._v("For the use of a specified random seed.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"array",type:"np.array"}},[n("p",[e._v("A "),n("code",[e._v("numpy")]),e._v(" array containing categorical data elements. The number of elements will match the "),n("code",[e._v("length")]),e._v(" parameter. The categorical data will consist of randomly selected letters.")])]),e._v(" "),n("h2",{attrs:{id:"mock-numerical-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-numerical-data"}},[e._v("#")]),e._v(" mock_numerical_data")]),e._v(" "),n("FuncSignature",[e._v("mock_numerical_data(length, min=0, max=100000, num_arrs=1, random_seed=None)")]),e._v(" "),n("p",[e._v("Generates a 2d "),n("code",[e._v("numpy")]),e._v(" array containing mock numerical data for testing or experimentation purposes.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"length",type:"int"}},[n("p",[e._v("The number of categorical elements to return in the array.")])]),e._v(" "),n("FuncElement",{attrs:{name:"min",type:"int"}},[n("p",[e._v("The (inclusive) minimum value in the "),n("code",[e._v("min")]),e._v(", "),n("code",[e._v("max")]),e._v(" range of randomly generated integers.")])]),e._v(" "),n("FuncElement",{attrs:{name:"max",type:"int"}},[n("p",[e._v("The (exclusive) maximum value in the "),n("code",[e._v("min")]),e._v(", "),n("code",[e._v("max")]),e._v(" range of randomly generated integers.")])]),e._v(" "),n("FuncElement",{attrs:{name:"num_arrs",type:"int"}},[n("p",[e._v("The number of arrays to nest in the returned 2d array.")])]),e._v(" "),n("FuncElement",{attrs:{name:"random_seed",type:"int"}},[n("p",[e._v("For the use of a specified random seed.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"array",type:"np.array"}},[n("p",[e._v("A 2d "),n("code",[e._v("numpy")]),e._v(" array containing numerical data elements. The first dimension corresponds to the number of data arrays, and is set with the "),n("code",[e._v("num_arrs")]),e._v(" parameter. The length of the second dimension will represents the number of data elements and will match the "),n("code",[e._v("length")]),e._v(" parameter. The numerical data will consist of randomly selected integers.")])]),e._v(" "),n("h2",{attrs:{id:"mock-species-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-species-data"}},[e._v("#")]),e._v(" mock_species_data")]),e._v(" "),n("FuncSignature",[e._v("mock_species_data(random_seed=None)")]),e._v(" "),n("p",[e._v('A generator function returning a series of randomly generated counts and corresponding probabilities for testing diversity measures. The data is generated in varying lengths from randomly assigned integers between 1 and 10. Matching integers are then collapsed into species "classes" with probabilities computed accordingly.')]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"random_seed",type:"int"}},[n("p",[e._v("For the use of a specified random seed.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"counts",type:"np.array"}},[n("p",[e._v("The number of members for each species class.")])]),e._v(" "),n("FuncElement",{attrs:{name:"probs",type:"np.array"}},[n("p",[e._v("The probability of encountering the respective species classes.")])]),e._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" cityseer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("util "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" mock\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" counts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" probs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mock_species_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    cs "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("c "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" c "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" counts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    ps "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("round")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" p "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" probs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# c = [1]")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# p = [1.0]")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# c = [1, 1, 2, 2]")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# p = [0.167, 0.167, 0.333, 0.333]")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# c = [1, 4, 3, 1, 1, 1]")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# p = [0.091, 0.364, 0.273, 0.091, 0.091, 0.091]")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# c = [2, 1, 2, 3, 3, 2, 1, 2]")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# p = [0.125, 0.062, 0.125, 0.188, 0.188, 0.125, 0.062, 0.125]")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# etc.")]),e._v("\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br")])]),n("h2",{attrs:{id:"mock-osm-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-osm-data"}},[e._v("#")]),e._v(" mock_osm_data")]),e._v(" "),n("FuncSignature",[e._v("mock_osm_data(alt=False)")]),e._v(" "),n("p",[e._v("Returns a "),n("code",[e._v("JSON")]),e._v(" string representing a typical "),n("a",{attrs:{href:"https://www.openstreetmap.org",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("Open Street Map")]),n("OutboundLink")],1),e._v(" response. Used for testing purposes.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Hint")]),e._v(" "),n("p",[e._v("Where the intent is to derive a graph from this data: use in combination with "),n("RouterLink",{attrs:{to:"/util/graphs.html#nx-from-osm"}},[n("code",[e._v("graphs.nX_from_osm")])]),e._v(".")],1)]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"alt",type:"bool"}},[n("p",[e._v("When set to "),n("code",[e._v("True")]),e._v(": provides an alternative set of OSM data.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"osm_json",type:"str"}},[n("p",[e._v("A "),n("code",[e._v("JSON")]),e._v(" string representing OSM "),n("code",[e._v("nodes")]),e._v(" and "),n("code",[e._v("ways")]),e._v(" data.")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);