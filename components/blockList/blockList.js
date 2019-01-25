// component/blockList/blockList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderMsg: Array,
    pageTag: Number
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
    // 删除订单
    orderDelete(e) {
      console.log(e.currentTarget.dataset.ordermsg)
      wx.showModal({
        title: '删除',
        content: '是否要取消该订单？',
        success: function (res) {
          if(res.confirm) {
            // 调删除接口--
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1000
            })
          } else {
            // wx.showToast({
            //   title: '已取消',
            //   duration: 1000
            // })
          }
        }
      })
    },
    jumpPage(e) {
      // console.log(e.currentTarget.dataset)
      let btnData = {
        btn: e.currentTarget.dataset.btn,
        item: e.currentTarget.dataset.item
      }
      this.triggerEvent('myevent', btnData)
    }
  }
})
