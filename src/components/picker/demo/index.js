import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Picker from '../Picker';
import InputItem from '../../input-item';

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

export default class Demo extends React.Component {
  state = {
    inputValue2: [],
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  onOk = (value) => {
    console.log('onOk', value);
    this.setState({
      inputValue: [value[0]],
    });
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  render() {
    return (
      <div>
        <DemoBlock title="单列">
          <Picker
            className="fortest"
            data={district}
            cols={1}
            title="选择年份"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
          >
            <InputItem
              label="年份"
              readOnly
              value={this.state.inputValue}
              placeholder="请输入年龄"
            />
          </Picker>
        </DemoBlock>
        <DemoBlock title="多列">
          <Picker
            className="fortest"
            data={seasons}
            cols={2}
            title="选择季节"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={(value) => { this.setState({ inputValue2: value }); }}
          >
            <InputItem
              label="季节"
              readOnly
              value={this.state.inputValue2.join('-')}
              placeholder="请输入季节"
            />
          </Picker>
        </DemoBlock>
      </div>
    );
  }
}
