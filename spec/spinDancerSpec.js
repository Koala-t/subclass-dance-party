describe('spinDancer', function() {

  var spinDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinDancer = new SpinDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });

});
