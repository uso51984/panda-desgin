import React from 'react';
import Cell from '../../Cell';
import List from '../List';
import './index.less';

const data = [];
for (let i = 0; i < 40; i++) {
  data.push('1');
}

export default class Demo extends React.PureComponent {
  state = {
    data,
    loading: false,
  }
  load = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      const { data } = this.state;
      if (data.length > 200) {
        return;
      }
      for (let i = 0; i < 20; i++) {
        data.push('2');
      }
      this.setState({ data, loading: false });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>asdfasfasdfsadf</h1>
        <List
          load={this.load}
          loading={this.state.loading}
        >
          <div>
            {
              this.state.data.map((value, index) => (
                <Cell title={value} key={index} />
                ))
            }
          </div>

        </List>

      </div>

    );
  }
}
