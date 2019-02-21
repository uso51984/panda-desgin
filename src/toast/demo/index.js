import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Toast from '../Toast';
import Button from '../../Button';

function showToast() {
  Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function failToast() {
  Toast.fail('Load failed !!!', 1);
}

function offline() {
  Toast.offline('Network connection failed !!!', 1);
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

export default () => (
  <div>
    <DemoBlock title="基本文字提示" className="has-padding">
      <Button inline onClick={showToast} style={{ marginRight: 20 }}>文字提示</Button>
      <Button inline onClick={showToastNoMask}>无mask</Button>
    </DemoBlock>

    <DemoBlock title="成功/失败" className="has-padding">
      <Button inline onClick={successToast} style={{ marginRight: 20 }}>成功提示</Button>
      <Button inline onClick={failToast}>失败提示</Button>
    </DemoBlock>

    <DemoBlock title="网络离线状态" className="has-padding">
      <Button onClick={offline}>网络离线状态</Button>
    </DemoBlock>

    <DemoBlock title="loading" className="has-padding">
      <Button onClick={loadingToast}>loading</Button>
    </DemoBlock>
  </div>
);
