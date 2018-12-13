/* tslint:disable:no-console */
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Picker from '../Picker';
import MultiPicker from '../MultiPicker';
import Toast from '../../toast';

const count = 0;
const len = 10;

class DemoMultiPicker extends React.Component {
  state = {
    value: ['1', '11'],
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

  render() {
    return (
      <div style={{ background: '#f5f5f9', padding: 10 }}>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
          onScrollChange={this.onScrollChange}
        >
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item value="1">一</Picker.Item>
            <Picker.Item value="2">二</Picker.Item>
            <Picker.Item value="3">三</Picker.Item>
            <Picker.Item value="4">四</Picker.Item>

          </Picker>
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item value="5">五</Picker.Item>
            <Picker.Item value="6">六</Picker.Item>
            <Picker.Item value="7">七</Picker.Item>
            <Picker.Item value="8">八</Picker.Item>
            <Picker.Item value="9">九</Picker.Item>
          </Picker>
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
        <Picker.Item value={`${i}`} key={i}>
          {count} {i}
        </Picker.Item>
      ));
    }
    return items;
  }

  render() {
    return (
      <div>
        <DemoBlock title="单列选择">
          <Picker
            selectedValue={this.state.value}
            onValueChange={this.onChange}
            onScrollChange={this.onScrollChange}
          >
            {this.state.items}
          </Picker>
        </DemoBlock>
        <DemoBlock title="多列选择">
          <DemoMultiPicker />
        </DemoBlock>
      </div>
    );
  }
}
