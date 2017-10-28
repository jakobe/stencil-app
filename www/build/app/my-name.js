/*! Built with http://stenciljs.com */

App.loadStyles("my-name","my-name {\n  font-family: Courier New, Courier, monospace;\n  font-weight: bold;\n}\nmy-name.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"my-name",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
"use strict";
// @stencil/core

var MyName = /** @class */ (function () {
    function MyName() {
    }
    MyName.prototype.render = function () {
        return (h("div", null,
            "Hello, my name is ",
            this.first,
            " ",
            this.last));
    };
    return MyName;
}());

exports['my-name'] = MyName;
},


/***************** my-name *****************/
[
/** my-name: tag **/
"my-name",

/** my-name: members **/
[
  [ "first", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "last", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** my-name: host **/
{}

]
);