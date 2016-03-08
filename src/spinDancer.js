var SpinDancer = function (top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

};


SpinDancer.prototype = Object.create(Dancer.prototype);

SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function (timeBetweenSteps) {


  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.animate({
    top: "+=110px",
    left: "+=30px"
  });

};
