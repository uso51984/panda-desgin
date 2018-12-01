import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el) {
    this.codeEl = el;
  }

  componentDidMount() {
    CodeMirror(this.codeEl, {
      readOnly: true,
      value: this.props.value,
      mode: this.props.language,
    });
  }

  render() {
    return (
      <div ref={this.setRef} />
    );
  }
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
