Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit(e) {
      console.log(e)
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset() {
      console.log('form发生了reset事件')
    }
  }
})