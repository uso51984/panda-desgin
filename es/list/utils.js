export default {
  getScrollEventTarget: function getScrollEventTarget(element) {
    var rootParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
    var currentNode = element;

    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      var overflowY = this.getComputedStyle(currentNode).overflowY;

      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }

      currentNode = currentNode.parentNode;
    }

    return rootParent;
  },
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },
  getComputedStyle: document.defaultView.getComputedStyle.bind(document.defaultView)
};