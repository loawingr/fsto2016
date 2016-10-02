(function(){
    "use strict";
    var util = {
        isOdd : function(n){
            if (typeof(n) !== "number"){
                return null;
	    }
            return (n%2 !== 0);
        }
    };
    if (!window.util){
        window.util = util;
    }
})();
