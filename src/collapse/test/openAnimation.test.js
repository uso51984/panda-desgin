
import animationFunc from '../openAnimation';

describe('openAnimation', () => {
  it('animation should work fine ', () => {
    const animation = animationFunc('test');
    const divNode = document.createElement('div');
    animation.enter(divNode, () => { });
    animation.leave(divNode, () => { });
  });
});
