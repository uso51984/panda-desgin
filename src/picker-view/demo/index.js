import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import PickerView from '../PickerView';
import MultiPicker from '../MultiPicker';
import Toast from '../../toast';

const count = 0;
const len = 10;

class DemoMultiPicker extends React.Component {
  state = {
    value: ['1', '11'],
  };

  onChange = (value) => {
    Toast.info(value, 0.5);
    this.setState({
      value,
    });
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  render() {
    return (
      <div style={{ background: '#f5f5f9', padding: 10 }}>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
          onScrollChange={this.onScrollChange}
        >
          <PickerView indicatorClassName="my-picker-indicator">
            <PickerView.Item value="1">一</PickerView.Item>
            <PickerView.Item value="2">二</PickerView.Item>
            <PickerView.Item value="3">三</PickerView.Item>
            <PickerView.Item value="4">四</PickerView.Item>
          </PickerView>
          <PickerView indicatorClassName="my-picker-indicator">
            <PickerView.Item value="5">五</PickerView.Item>
            <PickerView.Item value="6">六</PickerView.Item>
            <PickerView.Item value="7">七</PickerView.Item>
            <PickerView.Item value="8">八</PickerView.Item>
            <PickerView.Item value="9">九</PickerView.Item>
          </PickerView>
        </MultiPicker>
      </div>
    );
  }
}

export default class PickerDemo extends React.Component {
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
          {`${count} ${i}`}
        </PickerView.Item>
      ));
    }
    return items;
  }

  render() {
    return (
      <div>
        <DemoBlock title="单列选择">
          <PickerView
            selectedValue={this.state.value}
            onValueChange={this.onChange}
            onScrollChange={this.onScrollChange}
          >
            {this.state.items}
          </PickerView>
        </DemoBlock>
        <DemoBlock title="多列选择">
          <DemoMultiPicker onValueChange={(value) => { console.log('value', value); }} />
        </DemoBlock>
      </div>
    );
  }
}
