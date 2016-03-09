// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  $(this.$node).on("mouseover",function(){ 
    console.log("hi");
  });
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
  this.top = top;
  this.left = left;


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};



Dancer.prototype.lineup = function () {
  console.log("pre", this.left);
  this.$node.animate({
    // top: 20,
    left: 20
  });
  console.log("post", this.left);

};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//invoke when morphyDancer (pizza-party) is clicked
Dancer.prototype.Pizza = function (turtles) {
  var closestTurtle;
  var theParty = dancers[dancers.length - 1];
  //get the top and left properties from the input-array
  var distance = [];
  for (var i = 0; i < turtles.length; i++) {
    var turtle = turtles[i];
    //get the difference in x squared and y squared 
    distance.push(
      Math.sqrt(
        Math.pow(Math.abs(turtle.left - theParty.left), 2) + 
        Math.pow(Math.abs(turtle.top - theParty.top), 2) 
      )
    //add them then get the square root
    //push the results into distance 
    );
    //take the index of the lowest value in distance at the end


    

    console.log('distance', distance);
    console.log('turtle', turtle);
    console.log('this', dancers[dancers.length-1]);
  }
};





// Dancer.prototype.step = function(timeBetweenSteps) {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   var that = this;
//   setTimeout(function () { that.step() }, timeBetweenSteps);
// };

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};