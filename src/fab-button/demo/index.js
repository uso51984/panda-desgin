import React from 'react';
import FabButton from '../index';

export default () =>
  (
    <div>
      <FabButton
        position="top-left"
        type="vertical"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>
      <FabButton reverse>
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>

      <FabButton
        reverse
        icon="菜单"
        position="bottom-left"
        type="vertical"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>

      <FabButton
        reverse={false}
        position="center"
        type="circle"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>

      <FabButton
        reverse={false}
        position="top-right "
        type="vertical"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>
    </div>
  );
