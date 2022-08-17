// Cat constructor , requiring arguments for name and weight
// Throw an error if name or weight not specified when invoking the constructor.
// Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
// Must use Object.defineProperty



var Cat = (function () {
    var cats = [];
    var name = function (name, weight) {
      if (typeof name == "undefined" || typeof weight == "undefined") {
        throw Error("Must specify a name and a weight");
      }
      Object.defineProperty(this, 'name', {
        get: function () { return name }
      });
      Object.defineProperty(this, 'weight', {
        get: function () { return weight },
        set: function (x) { weight = x; return weight }
      });
      cats.push(this);
    };
    name.averageWeight = function() {
      return cats.reduce(function (sum, cat) { return sum + cat.weight }, 0) / cats.length;
    };
    return name;
  }());