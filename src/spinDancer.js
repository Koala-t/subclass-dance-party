var SpinDancer = function (top, left, timeBetweenSteps) {

  this.location = "first";
  Dancer.call(this, top, left, timeBetweenSteps);

};


SpinDancer.prototype = Object.create(Dancer.prototype);

SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function (timeBetweenSteps) {


  Dancer.prototype.step.call(this, timeBetweenSteps);

  if (this.location === 'first'){
  this.$node.animate({
    top:  "+=20px",
    left: "+=40px"
  });

    this.location = 'second';
  }

  if (this.location === 'second') {
    this.$node.animate({
      top: "-=20px",
      left: "-=40px"
    });

    this.location = 'first';
  }


};
