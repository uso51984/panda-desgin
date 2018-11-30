// This file is auto gererated by build/build-entry.js
function wrapper(promise, name) {
  return promise.then((component) => {
    component = component.default;
    name = `demo-${name}`;
    component.name = name;
    return component;
  });
}
import Button from 'src/button/demo'
import Alert from 'src/Alert/demo'

export default {
  button: Button,
  alert: Alert,
};
