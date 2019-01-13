Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    submit: Boolean,
    reset: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '',
    time: '',
    region: []
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
    // 重置
    formReset() {
      console.log('form发生了reset事件')
    },
    // 省市picker确定
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
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
    openToast: function () {
      wx.showToast({
        title: '已完成',
        icon: 'success',
        duration: 3000
      });
    },
  }
})