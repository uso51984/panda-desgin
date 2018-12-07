/* eslint-disable */
// const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    nav: [
      {
        name: '开发指南',
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
            ]
          },

          {
            groupName: '反馈',
            list: [
              {
                path: '/modal',
                title: 'Modal 对话框'
              },
            ]
          },
        ]
      }
    ]
  },
};
