const app = getApp()

Page({
  data: {
    orderList: [
      {
        label: '店面名称',
        name: 'storeName',
        isdisabled: true,
        isInput: true
      }, {
        label: '联系人',
        name: 'contact',
        isdisabled: false,
        isInput: true
      }, {
        label: '联系电话',
        name: 'contactNumber',
        isdisabled: false,
        isInput: true
      }, {
        label: '所在城区',
        name: 'cityArea',
        isdisabled: false,
        isCity: true,
      }, {
        label: '详细地址',
        name: 'address',
        isdisabled: false,
        isInput: true
      }, {
        label: '安装日期',
        name: 'installationDate',
        isdisabled: false,
        isDate: true,
        startDate: '2015-09-01',
        endDate: '2017-09-01'
      }, {
        label: '安装时间',
        name: 'installationTime',
        isdisabled: false,
        isTime: true,
        startTime: '09:01',
        endTime: '21:01'
      },  {
        label: '安装类型',
        name: 'installationType',
        isdisabled: false,
        isGeneral: true,
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
          {
            id: 0,
            name: '美国'
          },
          {
            id: 1,
            name: '中国'
          },
          {
            id: 2,
            name: '巴西'
          },
          {
            id: 3,
            name: '日本'
          }
        ],
      }, {
        label: '检修原因',
        name: 'maintenanceReasons',
        isdisabled: false,
        isTextarea: true,
        placeholder: '请输入检修原因'
      }, {
        label: '检修类型',
        name: 'maintenanceType',
        isdisabled: false,
        isRadio: true,
        radioList: [
          { name: 'USA', value: '美国' },
          { name: 'CHN', value: '中国', checked: 'true' },
          { name: 'BRA', value: '巴西' }
        ]
      }
    ]
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
