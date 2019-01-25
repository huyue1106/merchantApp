import WxValidate from '../../utils/WxValidate.js'
Page({
  data: {
    date: '',
    time: '',
    // region: [],
    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    objectMultiArray: [
      [{
        id: 0,
        name: '无脊柱动物'
      },
      {
        id: 1,
        name: '脊柱动物'
      }
      ],
      [{
        id: 0,
        name: '扁性动物'
      },
      {
        id: 1,
        name: '线形动物'
      },
      {
        id: 2,
        name: '环节动物'
      },
      {
        id: 3,
        name: '软体动物'
      },
      {
        id: 3,
        name: '节肢动物'
      }
      ],
      [{
        id: 0,
        name: '猪肉绦虫'
      },
      {
        id: 1,
        name: '吸血虫'
      }
      ]
    ],
    multiIndex: [],
    obj: {
      storeName: '深圳奥迪专卖店',
      // contact: '权志龙',
      // contactNumber: '1344545656',
      // cityArea: ['广东省', '深圳市', '南山区'],
      // address: '科兴科学园C3栋7楼',
      // installationDate: '2019-01-01',
      // installationTime: '18：00',
      // installationType: 'GPS',
      // brandModel: ['Audi', '/TTS Roadster'],
      // vehicleColor: '红色',
      // frameNumber: 'LZWADAGA8JB257701',
      // ownerName: '徐振华',
      // carOwnerPhone: '13554857858'
    },
    list: [
      {
        title: '订单详情（必填）',
        childList: [
          {
            label: '店面名称',
            name: 'storeName',
            // value: '深圳奥迪专卖店',
            isdisabled: true,
            required: true,
            isInput: true
          }, {
            label: '联系人',
            name: 'contact',
            // value: '权志龙',
            isdisabled: false,
            required: true,
            isInput: true,
            placeholder: '请填写您的称呼'
          }, {
            label: '联系电话',
            name: 'contactNumber',
            // value: '1344545656',
            type: 'number',
            isdisabled: false,
            required: true,
            isInput: true,
            maxlength: 11,
            placeholder: '请填写您的手机'
          }, {
            label: '所在城区',
            name: 'cityArea',
            // value: '广东省，深圳市，南山区',
            isdisabled: false,
            required: true,
            isCity: true,
            placeholder: '请选择城区'
          }, {
            label: '详细地址',
            name: 'address',
            // value: '科兴科学园C3栋7楼',
            isdisabled: false,
            required: true,
            isInput: true,
            placeholder: '请填写上门安装的详细地址'
          }, {
            label: '安装日期',
            name: 'installationDate',
            // value: '2019-01-01',
            isdisabled: false,
            required: true,
            isDate: true,
            startDate: '2015-09-01',
            endDate: '2017-09-01',
            placeholder: '请选择日期',
            value: ''
          }, {
            label: '安装类型',
            name: 'installationType',
            // value: 'GPS',
            isdisabled: false,
            required: true,
            isGeneral: true,
            placeholder: '请选择类型',
            array: ['GPS', '中控车技'],
            bindchange: 'bindPickerChange'
          }
        ]
      }, {
        title: '车辆信息（部分必填）',
        childList: [
          {
            label: '品牌车型',
            name: 'brandModel',
            // value: 'Audi/TTS Roadster',
            isdisabled: false,
            required: true,
            isMultiPicker: true,
            placeholder: '请选择车型'
          }, {
            label: '车辆颜色',
            name: 'vehicleColor',
            // value: '红色',
            isdisabled: false,
            required: true,
            isInput: true,
            placeholder: '请输入车辆颜色'
          }, {
            label: '车架号',
            name: 'frameNumber',
            // value: 'LZWADAGA8JB257701',
            isdisabled: false,
            isInput: true,
            placeholder: '请输入17位车架号'
          }
        ]
      }, {
        title: '车主信息（选填）',
        childList: [
          {
            label: '车主姓名',
            name: 'ownerName',
            // value: '徐振华',
            isdisabled: false,
            isInput: true,
            placeholder: '请填写车主姓名'
          }, {
            label: '车主电话',
            name: 'carOwnerPhone',
            // value: '13554857858',
            isdisabled: false,
            isInput: true,
            placeholder: '请填写车主联系方式'
          }
        ]
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (this.data.obj) {
      for (let i in this.data.list) {
        for (let j in this.data.list[i].childList) {
          let value = 'list[' + i + '].childList[' + j + '].value'
          let name = this.data.list[i].childList[j].name
          if (this.data.obj[name]) {
            this.setData({
              [value]: this.data.obj[name]
            })
          } else {
            this.setData({
              [value]: ''
            })
          }
        }
      }
      console.log(this.data.list)
    }
    this.initValidate()
  },
  // form提交
  formSubmit(e) {
    console.log(e)
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const params = e.detail.value//校验表单
    console.log(this.WxValidate)
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      mask: true,
      duration: 1500,
      success() {
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1500)
        
      }
    })
  },
  // 重置
  formReset() {
    console.log('form发生了reset事件')
  },
  // 省市picker确定
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    // this.data.list
    this.setData({
      region: e.detail.value
    })
  },
  // 单列picker确定
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      j: e.detail.value
    })
  },
  // 日期picker确定
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 单选框picker确定
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  // 时间picker确定
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  // 多列picker
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  // openToast: function () {
  //   wx.showToast({
  //     title: '已完成',
  //     icon: 'success',
  //     duration: 3000
  //   })
  // },
  // 报错
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false
    })
  },
  // 验证
  initValidate() {
    const rules = {
      storeName: {
        required: true
      },
      contact: {
        required: true
      },
      contactNumber: {
        required: true,
        digits: true,
        maxlength: 11,
        tel: true
      },
      cityArea: {
        required: true
      },
      address: {
        required: true
      },
      installationDate: {
        required: true
      },
      installationType: {
        required: true
      },
      brandModel: {
        required: true
      },
      vehicleColor: {
        required: true
      }
    }
    const messages = {
      storeName: {
        required: '请输入店面名称'
      },
      contact: {
        required: '请输入联系人'
      },
      contactNumber: {
        required: '请输入联系电话',
        maxlength: '最多只可输入11位',
        tel: '请输入正确的手机号'
      },
      cityArea: {
        required: '请输入所在城区'
      },
      address: {
        required: '请输入详细地址'
      },
      installationDate: {
        required: '请输入安装日期'
      },
      installationType: {
        required: '请输入安装类型'
      },
      brandModel: {
        required: '请输入品牌车型'
      },
      vehicleColor: {
        required: '请输入车辆颜色'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
  }
})