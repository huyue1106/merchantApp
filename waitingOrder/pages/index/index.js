Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  openForm(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  openDetailed() {
    wx.navigateTo({
      url: '../detailed/detailed',
    })
  },
  openCreat() {
    wx.navigateTo({
      url: '../order/order'
    })
  }
  
})