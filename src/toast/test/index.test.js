import React from 'react';
import { render, mount } from 'enzyme';
import Toast from '../';

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Toast sholud work fine', () => {
    const onClose = jest.fn();
    Toast.info('This is a toast', 1, onClose);
    jest.runAllTimers();
    expect(onClose).toHaveBeenCalled();
    Toast.show('This is a toast', 1, 'ddd');
    jest.runAllTimers();
    Toast.success('This is a toast');
    Toast.fail('This is a toast', 1);
    Toast.offline('This is a toast', 1);
    Toast.loading('This is a toast', 1);
    expect(document.querySelectorAll('.panda-toast')).toHaveLength(1);
    Toast.hide();
    expect(document.querySelectorAll('.panda-toast')).toHaveLength(0);
  });
});
