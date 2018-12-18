import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import PickerView from '../../picker-view';
import Toast from '../../toast';
import Picker from '../Picker';

const count = 0;
const len = 10;

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

export default class Demo extends React.Component {
  state = {
    items: this.getItems(count),
    value: `${count + (len / 2)}`,
  };

  onChange = (value) => {
    Toast.info(value, 1);
    this.setState({
      value,
    });
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  getItems(start) {
    const items = [];
    for (let i = start; i < start + len; i++) {
      items.push((
        <PickerView.Item value={`${i}`} key={i}>
          {count} {i}
        </PickerView.Item>
      ));
    }
    return items;
  }

  onOk = (value) => {
    console.log('onOk', value);
    // this.setState({
    //   value,
    // });
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  render() {
    const district = [
      [
        {
          label: '2013',
          value: '2013',
        },
        {
          label: '2014',
          value: '2014',
        },
      ],
    ];
    return (
      <div>
        <DemoBlock title="单例" className="has-padding">
          <Picker
            className="fortest"
            data={district}
            cols={1}
            title="Picker"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
          >
            <button>open</button>
          </Picker>
        </DemoBlock>
        <DemoBlock title="多列" className="has-padding">
          <Picker
            className="fortest"
            data={seasons}
            cols={2}
            title="Picker"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
          >
            <button>open</button>
          </Picker>
        </DemoBlock>
      </div>
    );
  }
}
