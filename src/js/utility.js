(function(){
    "use strict";
    var util = {
        isOdd : function(n){
            if (typeof(n) !== "number"){
                return null;
	    }
            if (n%2 === 0){
                return false;
            }
            return true;
        }
    };
    if (!window.util){
        window.util = util;
    }
})();
