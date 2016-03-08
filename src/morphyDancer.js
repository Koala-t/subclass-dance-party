var MorphyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};


MorphyDancer.prototype = Object.create(Dancer.prototype);

MorphyDancer.prototype.constructor = MorphyDancer;

MorphyDancer.prototype.step = function (timeBetweenSteps) {

  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.css({"content": "url(http://45.media.tumblr.com/c0025689e0cfdeb602f32b0c04baa1e8/tumblr_mr0rwbxbFs1rby04wo1_500.gif)"});


};