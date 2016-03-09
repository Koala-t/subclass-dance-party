describe('morphyDancer', function() {

  var morphyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    morphyDancer = new MorphyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(morphyDancer.$node).to.be.an.instanceof(jQuery);
  });

});
