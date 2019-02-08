import classnames from 'classnames';
import React from 'react';
import KeyboardItem from './KeyboardItem';

class NumberKeyboard extends React.Component {
  static defaultProps = {
    prefixCls: 'panda-number-keyboard',
    theme: 'default',
    deleteText: 'delete',
    onKeyboardClick() {},
    confirm: '确定',
  };

  onKeyboardClick = (value, e) => {
    this.props.onKeyboardClick(value, e);
  }

  keys() {
    const { theme, deleteText } = this.props;
    const keys = [];
    for (let i = 1; i <= 9; i++) {
      keys.push({ text: i });
    }
    switch (theme) {
      case 'custom':
        keys.push(
          { text: 0, type: 'middle' },
          { text: '.' },
        );
        break;
      default:
        keys.push(
          { text: '.', type: 'gray' },
          { text: 0 },
          { text: deleteText, type: 'gray', action: 'delete' },
        );
        break;
    }
    return keys;
  }

  getHeaderNode() {
    const { confirm, prefixCls } = this.props;
    return (
      <div className="hairline--top panda-number-keyboard__title">
        <span
          onClick={() => this.onKeyboardClick('confirm')}
          className={`${prefixCls}__close`}
        >
          {confirm}
        </span>
      </div>
    );
  }

  render() {
    const { prefixCls, wrapProps, theme, deleteText, confirm } = this.props;
    const wrapperCls = classnames(`${prefixCls}`, {
      [`${prefixCls}--custom`]: theme === 'custom',
    });

    return (
      <div className={wrapperCls} ref={el => (this.antmKeyboard = el)} {...wrapProps}>
        {theme === 'default' && this.getHeaderNode()}
        <div className={`${prefixCls}__body`}>
          {
            this.keys().map(item => (
              <KeyboardItem
                prefixCls={prefixCls}
                onClick={this.onKeyboardClick}
                type={item.type}
                action={item.action}
                key={`item-${item.text}`}
              >
                {item.text}
              </KeyboardItem>
            ))
          }
        </div>

        {
          theme === 'custom' &&
          <div className={`${prefixCls}__sidebar`}>
            <KeyboardItem
              prefixCls={prefixCls}
              onClick={this.onKeyboardClick}
              key={`item-${deleteText}`}
              type="gray"
              action="delete"
              className={`${prefixCls}-item--big`}
            >
              {deleteText}
            </KeyboardItem>
            <KeyboardItem
              prefixCls={prefixCls}
              onClick={this.onKeyboardClick}
              action="confirm"
              className={`${prefixCls}-item--big ${prefixCls}-item--blue`}
              key={`item-${confirm}`}
            >
              {confirm}
            </KeyboardItem>
          </div>
        }
      </div>
    );
  }
}

export default NumberKeyboard;
