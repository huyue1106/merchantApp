const app = getApp()

Page({
  data: {
    date: '',
    time: '',
    region: [],
    submit: true,
    list: [{
        title: '订单详情',
        childList: [{
          label: '店面名称',
          name: 'storeName',
          value: '深圳奥迪专卖店',
          isdisabled: true,
          isInput: true
        }, {
          label: '联系人',
          name: 'contact',
          isdisabled: false,
          isInput: true,
          placeholder: '请填写您的称呼'
        }, {
          label: '联系电话',
          name: 'contactNumber',
          isdisabled: false,
          isInput: true,
          placeholder: '请填写您的手机'
        }, {
          label: '所在城区',
          name: 'cityArea',
          isdisabled: false,
          isCity: true,
          placeholder: '请选择城区'
        }, {
          label: '详细地址',
          name: 'address',
          isdisabled: false,
          isInput: true,
          placeholder: '请填写上门安装的详细地址'
        }, {
          label: '安装日期',
          name: 'installationDate',
          isdisabled: false,
          isDate: true,
          startDate: '2015-09-01',
          endDate: '2017-09-01',
          placeholder: '请选择日期'
        }, {
          label: '安装时间',
          name: 'installationTime',
          isdisabled: false,
          isTime: true,
          startTime: '09:01',
          endTime: '21:01',
          placeholder: '请选择时间'
        }, {
          label: '安装类型',
          name: 'installationType',
          isdisabled: false,
          isGeneral: true,
          placeholder: '请选择类型',
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
          ]
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
          radioList: [{
              name: 'USA',
              value: '美国'
            },
            {
              name: 'CHN',
              value: '中国',
              checked: 'true'
            },
            {
              name: 'BRA',
              value: '巴西'
            }
          ]
        }]
      },
      {
        title: '车辆信息',
        childList: [{
          label: '品牌车型',
          name: 'brandModel',
          isdisabled: false,
          isGeneral: true,
          array: ['美国', '中国', '巴西', '日本']
        }, {
          label: '车辆颜色',
          name: 'vehicleColor',
          isdisabled: false,
          isInput: true,
          placeholder: '请输入车辆颜色'
        }, {
          label: '车架号',
          name: 'frameNumber',
          isdisabled: false,
          isInput: true,
          placeholder: '请输入17位车架号'
        }]
      }, {
        title: '车主信息',
        childList: [{
          label: '车主姓名',
          name: 'ownerName',
          isdisabled: false,
          isInput: true,
          placeholder: '请填写车主姓名'
        }, {
          label: '车主电话',
          name: 'carOwnerPhone',
          isdisabled: false,
          isInput: true,
          placeholder: '请填写车主联系方式'
        }]
      }
    ]
  }
})