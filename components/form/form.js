Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '请选择日期',
    time: '请选择时间',
    region: ['请选择'],
    formList: [],
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // form提交
    formSubmit(e) {
      console.log(e)
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset() {
      console.log('form发生了reset事件')
    },
    // picker确定
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        i: e.detail.value
      })
    }, 
    bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        date: e.detail.value
      })
    },
    radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    bindTimeChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        time: e.detail.value
      })
    }
  }
})