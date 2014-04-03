(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        function d3_number(x) {
            return x != null && !isNaN(x);
        }
        d3.mean = function(array, f) {
            var n = array.length, a, m = 0, i = -1, j = 0;
            if (arguments.length === 1) {
                while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
            } else {
                while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
            }
            return j ? m : undefined;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();