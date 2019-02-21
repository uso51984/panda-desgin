import React from 'react';
import { mount } from 'enzyme';
import Modal from '../index';

describe('Modal', () => {
  it('Modal transparent is false renders correctly', () => {
    const onPress = jest.fn();
    const wrapper = mount(
      <Modal
        visible
        maskClosable={false}
        popup
        transparent={false}
        onClose={() => {}}
        title="Title"
        footer={[{ text: '确定', style: {}, onPress }]}
        wrapProps={{ onTouchStart: () => {} }}
      >
        <p>内容</p>
      </Modal>);
    document.querySelectorAll('.panda-modal-button')[0].click();
    expect(onPress).toBeCalled();
  });

  it('Modal animated is false renders correctly', () => {
    const wrapper = mount(
      <Modal
        visible
        maskClosable={false}
        popup
        animated={false}
        onClose={() => {}}
        title="Title"
        footer={[{ text: '确定', onPress: () => { } }, { }]}
        wrapProps={{ onTouchStart: () => {} }}
      >
        <p>内容</p>
      </Modal>);

    document.querySelectorAll('.panda-modal-button')[2].click();
  });
});
