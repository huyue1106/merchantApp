Page({

  /**
   * 页面的初始数据
   */
  data: {
    isView: false,
    focus: false,
    password: '123456'
  },
  login() {
    console.log('登录成功')
    wx.switchTab({
      url: '../../waitingOrder/pages/index/index',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  pswShowOrHide() {
    this.setData({
      isView: !this.data.isView,
      focus: true
    })
  },
  forgetPassword() {
    wx.navigateTo({
      url: '../changePassword/changePassword',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})