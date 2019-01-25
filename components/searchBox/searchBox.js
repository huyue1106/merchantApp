// components/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: '订单编号/车型/车架号/姓名'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm(e) {
      this.triggerEvent('search', e.detail.value)
    },
    // clear() {
    //   this.setData({
    //     inputValue: ''
    //   })
    // },
    handleInput(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    search(e) {
      this.triggerEvent('search', this.data.inputValue)
    }
  }
})
