/* tslint:disable:no-console */

import React from 'react';
import Dialog from '../DialogWrap';

export default class MyControl extends React.Component {
  state = {
    visible: false,
    visible2: false,
    center: false,
  };

  onClick = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  center = (e) => {
    this.setState({
      center: e.target.checked,
    });
  }

  showDialog2 = () => {
    this.setState({
      visible2: true,
    });
  }

  render() {
    let wrapClassName = '';
    if (this.state.center) {
      wrapClassName = 'center';
    }
    // if (!this.state.visible) {
    // dialog = null;
    // } else {
    const dialog = (
      <Dialog
        ref={dom => this.dialog = dom}
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
      >
        <input ref={el => this.modalInput = el} />
        <p onClick={this.showDialog2}>click to show dialog2</p>
        <div style={{ height: 200 }} />
      </Dialog>
    );
    const dialog2 = (
      <Dialog
        visible={this.state.visible2}
        animation="zoom"
        maskAnimation="fade"
        onClose={() => {
          this.setState({
            visible2: false,
          });
        }}
      >
        <input ref={el => this.modalInput = el} />
        <p>basic modal</p>
        <div style={{ height: 200 }} />
      </Dialog>
    );
    // }
    return (
      <div style={{ width: '90%', margin: '0 auto' }}>
        <style>
          {
            `
            .center {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            `
          }
        </style>
        <p>
          <button
            className="btn btn-primary"
            onClick={this.onClick}
          >
            show dialog
          </button>
          &nbsp;
          <label htmlFor="checkbox">
            center
            <input
              type="checkbox"
              checked={this.state.center}
              onChange={this.center}
            />
          </label>
        </p>
        {dialog}
        {dialog2}
      </div>
    );
  }
}
