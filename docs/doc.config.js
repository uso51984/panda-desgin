/* eslint-disable */
// const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    nav: [
      {
        name: '指南',
        groups: [
          {
            list: [
              {
                path: '/',
                title: '介绍'
              },
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '基础组件',
            list: [
              {
                path: '/button',
                title: 'Button 按钮'
              },
              {
                path: '/icon',
                title: 'Icon 图标'
              },
              // {
              //   path: '/dialog',
              //   title: 'dialog'
              // },
            ]
          },
          {
            groupName: '表单组件',
            list: [
              {
                path: '/checkbox',
                title: 'Checkbox 复选框'
              },
              {
                path: '/radio',
                title: 'Radio 复选框'
              },
              {
                path: '/input-item',
                title: 'InputItem 输入'
              },
              {
                path: '/date-picker',
                title: 'DatePicker 日期选择'
              },
              {
                path: '/number-keyboard',
                title: 'NumberKeyboard 数字键盘'
              },
              {
                path: '/switch',
                title: 'Switch 滑动开关'
              },
              {
                path: '/picker-view',
                title: 'PickerView 选择器'
              },
              {
                path: '/picker',
                title: 'Picker 选择器'
              },
              {
                path: '/stepper',
                title: 'Stepper 步进器'
              },
              {
                path: '/rate',
                title: 'Rate 评分'
              }
            ]
          },
          {
            groupName: '导航组件',
            list: [
              {
                path: '/nav-bar',
                title: 'NavBar 导航栏'
              },
            ]
          },
          {
            groupName: '展示组件',
            list: [
              {
                path: '/grid',
                title: 'Grid 栅格'
              },
              {
                path: '/cell',
                title: 'Cell 单元格'
              },
              {
                path: '/collapse',
                title: 'Collapse 单元格'
              },
              {
                path: '/badge',
                title: 'Badge 徽章'
              },
            ]
          },

          {
            groupName: '反馈',
            list: [
              {
                path: '/modal',
                title: 'Modal 对话框'
              },
              {
                path: '/toast',
                title: 'Toast 通知'
              },
              {
                path: '/fab-button',
                title: 'FabButton'
              }
              // {
              //   path: '/notification',
              //   title: 'Notification 通知'
              // },
            ]
          },
        ]
      }
    ]
  },
};
