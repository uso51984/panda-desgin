export var setTransform = function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
};
export var setTransition = function setTransition(nodeStyle, value) {
  nodeStyle.transition = value;
  nodeStyle.webkitTransition = value;
};
export var Velocity = function () {
  var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var time = 0;
  var initY = 0;
  var velocity = 0;
  var recorder = {
    record: function record(y) {
      var now = +new Date();
      velocity = (y - initY) / (now - time);

      if (now - time >= minInterval) {
        velocity = now - time <= maxInterval ? velocity : 0;
        initY = y;
        time = now;
      }
    },
    getVelocity: function getVelocity(y) {
      if (y !== initY) {
        recorder.record(y);
      }

      return velocity;
    }
  };
  return recorder;
}();