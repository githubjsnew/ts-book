var Geometry;
(function (Geometry) {
    var Rectangle = (function () {
        function Rectangle() {
        }
        Rectangle.prototype.doMove = function (location) {
            this.XLocation = location[0];
            this.YLocation = location[1];
            var myVar = new Measure();
            myVar.Area(this);
        };
        return Rectangle;
    }());
    Geometry.Rectangle = Rectangle;
    var Measure = (function () {
        function Measure() {
        }
        Measure.prototype.Area = function (rect) {
            return rect.doMove([1, 2]);
        };
        return Measure;
    }());
})(Geometry || (Geometry = {}));
