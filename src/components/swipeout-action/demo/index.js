import React from 'react';
import Swipeout from '../SwipeoutAction';

const SwipeDemo = () => (
  <Swipeout
    style={{ backgroundColor: 'white' }}
    autoClose
    right={[
      {
        text: <span style={{ color: 'yellow' }}>more more</span>,
        onPress: () => console.log('more more'),
        style: { backgroundColor: 'orange', color: 'white' },
      },
      { text: 'delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ]}
    left={[
      {
        text: 'read',
        onPress: () => console.log('read'),
        style: { backgroundColor: 'blue', color: 'white' },
      },
      {
        text: 'reply me',
        onPress: () => console.log('reply me'),
        style: { backgroundColor: 'green', color: 'white' },
      },
    ]}
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
    <div style={{
      height: 44,
      backgroundColor: 'white',
      lineHeight: '44px',
      borderTop: '1px solid #dedede',
      borderBottom: '1px solid #dedede',
    }}
    >swipe out simple demo
    </div>
  </Swipeout>
);

export default () => (
  <div style={{ marginBottom: 12 }}>
    <SwipeDemo />
    <Swipeout
      style={{ backgroundColor: 'white' }}
      autoClose
      right={[
        { text: 'more',
          onPress: () => console.log('more'),
          style: { backgroundColor: 'orange', color: 'white' },
        },
        { text: 'delete',
          onPress: () => console.log('delete'),
          style: { backgroundColor: 'red', color: 'white' },
        },
      ]}
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
    >
      <div onClick={() => {
        console.log('emit an event on children element!');
      }}
        style={{
        height: 44,
        backgroundColor: 'white',
        lineHeight: '44px',
        borderTop: '1px solid #dedede',
        borderBottom: '1px solid #dedede',
      }}
      >swipe out simple demo
      </div>
    </Swipeout>
    <Swipeout
      style={{ backgroundColor: 'white' }}
      autoClose
      left={[
        {
          text: 'read',
          onPress: () => console.log('read'),
          style: { backgroundColor: 'blue', color: 'white' },
        },
        {
          text: 'reply',
          onPress: () => console.log('reply'),
          style: { backgroundColor: 'green', color: 'white' },
        },
      ]}
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
    >
      <div style={{
        height: 44,
        backgroundColor: 'white',
        lineHeight: '44px',
        borderTop: '1px solid #dedede',
        borderBottom: '1px solid #dedede',
      }}
      >swipe out simple demo
      </div>
    </Swipeout>
  </div>
);
