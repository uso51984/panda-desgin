import React from 'react';
import FabButton from '../index';

export default class Demo extends React.PureComponent {
  state = {}

  render() {
    return (
      <div>
        <FabButton
          position="top-left"
          type="vertical"
        >
          <span>sdsdf</span>
          <span>face</span>
          <span>mail</span>
        </FabButton>
        <FabButton reverse >
          <span>sdsdf</span>
          <span>face</span>
          <span>mail</span>
        </FabButton>

        <FabButton
          reverse
          icon="菜单"
          position="bottom-left"
          type="vertical"
        >
          <span>sdsdf</span>
          <span>face</span>
          <span>mail</span>
        </FabButton>

        <FabButton
          reverse={false}
          position="center"
          type="circle"
        >
          <span>sdsdf</span>
          <span>face</span>
          <span>mail</span>
        </FabButton>

        <FabButton
          reverse={false}
          position="top-right "
          type="vertical"
        >
          <span>sdsdf</span>
          <span>face</span>
          <span>mail</span>
        </FabButton>
      </div>
    );
  }
}
