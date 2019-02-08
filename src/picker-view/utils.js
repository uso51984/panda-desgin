export const setTransform = (nodeStyle, value) => {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
};

export const setTransition = (nodeStyle, value) => {
  nodeStyle.transition = value;
  nodeStyle.webkitTransition = value;
};

export const Velocity = ((minInterval = 30, maxInterval = 100) => {
  let time = 0;
  let initY = 0;
  let velocity = 0;

  const recorder = {
    record: (y) => {
      const now = +new Date();
      velocity = (y - initY) / (now - time);

      if (now - time >= minInterval) {
        velocity = now - time <= maxInterval ? velocity : 0;
        initY = y;
        time = now;
      }
    },
    getVelocity: (y) => {
      if (y !== initY) {
        recorder.record(y);
      }
      return velocity;
    },
  };
  return recorder;
})();
