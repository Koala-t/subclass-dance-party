var SpinDancer = function (top, left, timeBetweenSteps) {

  
  Dancer.call(this, top, left, timeBetweenSteps);

};


SpinDancer.prototype = Object.create(Dancer.prototype);

SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function (timeBetweenSteps) {


  Dancer.prototype.step.call(this, timeBetweenSteps);

  // if (this.location === 'first'){
    // console.log(this.$node.top);
  this.$node.animate({
    top:  "+=20px",
    left: "+=40px"
  });
    // this.location = 'second';
  
  // }

  // if (this.location === 'second') {
    
  //   this.$node.animate({
  //     top: "-=110px",
  //     left: "-=30px"
  //   });

  //   this.location = 'first';
  // }


};
