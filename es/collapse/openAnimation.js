import domAnimation from 'dom-animation';

function animate(node, show, transitionName, done) {
  var height;
  return domAnimation(node, transitionName, {
    start: function start() {
      if (!show) {
        node.style.height = "".concat(node.offsetHeight, "px");
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active: function active() {
      /* istanbul ignore next */
      node.style.height = "".concat(show ? height : 0, "px");
    },
    end: function end() {
      node.style.height = '';
      done();
    }
  });
}

function animation(prefixCls) {
  return {
    enter: function enter(node, done) {
      return animate(node, true, "".concat(prefixCls, "-anim"), done);
    },
    leave: function leave(node, done) {
      return animate(node, false, "".concat(prefixCls, "-anim"), done);
    }
  };
}

export default animation;