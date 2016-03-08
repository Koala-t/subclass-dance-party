var MorphyDancer = function (top, left, timeBetweenSteps) {
    
  Dancer.call(this, top, left, timeBetweenSteps);

};


MorphyDancer.prototype = Object.create(Dancer.prototype);

MorphyDancer.prototype.constructor = MorphyDancer;

MorphyDancer.prototype.step = function (timeBetweenSteps) {

  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.toggleClass("morphy");


};