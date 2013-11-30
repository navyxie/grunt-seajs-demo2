define("appjs/util-debug", [ "sea-modules/jquery/jquery/2.0.3/jquery-debug-debug" ], function(require, exports, module) {
    var util = {};
    var colorRange = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
    util.randomColor = function() {
        return "#" + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)];
    };
    var $ = require("sea-modules/jquery/jquery/2.0.3/jquery-debug-debug");
    console.log("util");
    console.log($);
    module.exports = util;
});
