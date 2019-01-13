Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  afterSale() {
    wx.navigateTo({
      url: '../afterSale/afterSale',
    })
  },
  salsesDetailed() {
    wx.navigateTo({
      url: '../salesDetailed/salesDetailed',
    })
  }
})