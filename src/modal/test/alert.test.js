import React from 'react';
import { render, mount } from 'enzyme';
import { alert } from '../index';

describe('alert', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('alert and use default button should work fine', () => {
    alert({ title: 'sdfsdf' });

    const buttonList = document.body.querySelectorAll('.panda-modal-button');
    expect(buttonList).toHaveLength(1);
    buttonList[0].click();
  });

  it('alert and use default button should work fine', () => {
    const Ok = jest.fn();
    const Cancel = jest.fn();
    alert(
      { title: 'sdfsdf' },
      [
        { text: 'Ok', onPress: Ok },
        { text: 'Cancel', onPress: () => new Promise((resolve) => { resolve(Cancel); }) },
      ],
    );
    const buttonList = document.body.querySelectorAll('.panda-modal-button');
    expect(buttonList).toHaveLength(2);
    buttonList[0].click();
    expect(Ok).toBeCalled();
    buttonList[1].click();
  });


  it('if title and message is null should work fine', () => {
    const result = alert({});
    expect(result.close()).toEqual(undefined);
  });
});
