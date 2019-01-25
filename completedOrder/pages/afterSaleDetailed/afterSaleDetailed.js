Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      afterSalesType: '设备检修',
      repairOrderNumber: '7474783384',
      storeName: '深圳奥迪专卖店',
      contact: '张碧晨',
      contactNumber: '13285748950',
      cityArea: '广东省，深圳市，南山区',
      address: '科兴科学园C3栋7楼',
      installationDate: '2019-01-01',
      installationType: '中控车机',
      maintenanceReasons: '就是想检修',
    },
    detailed: [{
      title: '订单信息',
      isShow: true,
      detailedList: [{
        label: '售后类型',
        attributeName: 'afterSalesType'
      }, {
        label: '检修单号',
        attributeName: 'repairOrderNumber',
        url: '../../../pages/detailed/detailed'
      }, {
        label: '店面名称',
        attributeName: 'storeName'
      }, {
        label: '联系人',
        attributeName: 'contact'
      }, {
        label: '联系电话',
        attributeName: 'contactNumber'
      }, {
        label: '所在城区',
        attributeName: 'cityArea'
      }, {
        label: '详细地址',
        attributeName: 'address'
      }, {
        label: '安装日期',
        attributeName: 'installationDate'
      }, {
        label: '安装类型',
        attributeName: 'installationType'
      }, {
        label: '检修原因',
        attributeName: 'maintenanceReasons'
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    for (let i in this.data.detailed) {
      for (let j in this.data.detailed[i].detailedList) {
        let value = 'detailed[' + i + '].detailedList[' + j + '].content'
        let attr = this.data.detailed[i].detailedList[j].attributeName
        this.setData({
          [value]: this.data.obj[attr]
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})