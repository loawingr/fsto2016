(function(){
    "use strict";
    var util = {
        isOdd : function(n){
            if (typeof(n) !== "number"){
                return null;
            }
            return (n%2 !== 0);
        },
        formatText : function(str){
            if (typeof(str) !== "string"){
                return null;
            }
            str = str.toLowerCase().trim();
            str = str.replace(/:/g, " ");
            str = str.replace(/[^a-z0-9-\s]+/g, "");
            str = str.replace(/\s+/g, "-");
            return str;
        }
    };
    if (!window.util){
        window.util = util;
    }
})();
