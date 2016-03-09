//this will collect all the existing turtle troupes in an array
var pizza = function () {
  var turtles = [];
  for (var i = 0; i < dancers.length; i++) {
    var dancer = dancers[i];
    //if the node is a turtle troupe
    if (dancer.constructor === BlinkyDancer) {
      turtles.push(dancer);
    }
  }
  Dancer.prototype.Pizza(turtles);
};