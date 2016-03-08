var lineup = function () {
  console.log('called');
  var counter = 10;
  for (var i = 0; i < dancers.length; i++) {
    var item = dancers[i];
    console.log(item);

    item.$node.animate({
      top: counter,
      left: 20
    });

    counter += 20;
  }

};




//How could we move the dancer-instances
//without using animate?