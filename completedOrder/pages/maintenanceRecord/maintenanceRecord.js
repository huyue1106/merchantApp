Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    orderMsg: [{
        // 是否正在售后
        isAfterSale: true,
        // 1：安装单；2：拆除单；3：检修单；
        orderType: '1',
        orderNum: '747379473',
        serverType: '1',
        // 订单的取消状态
        cancel: '1',
        brand: 'Audi/TTS Roadster',
        detail: '徐振华-LZWADAGA8JB257701',
        orderTime: '02-01 17:12',
        time: '02-02 10:30'
      },
      {
        isAfterSale: false,
        orderType: '2',
        orderNum: '747379473',
        serverType: '2',
        cancel: '0',
        brand: 'Ferrari/Portofino',
        detail: '徐振华-LZWADAGA8JB257701',
        orderTime: '02-01 17:12'
      },
      {
        isAfterSale: false,
        orderType: '3',
        orderNum: '747379473',
        serverType: '3',
        cancel: '1',
        brand: 'Lamborghini/Aventador',
        detail: '徐振华-LZWADAGA8JB257701',
        orderTime: '02-01 17:12',
        time: '02-02 10:30'
      },
    ],
    pageTag: "3"
  },
  onLoad() {
    for (var i in this.data.orderMsg) {
      let btnIdx = 'orderMsg[' + i + '].btns'
      this.setData({
        [btnIdx]: [{
          name: '检修详情'
        }]
      })
    }
  },
  // 搜索
  search(e) {
    console.log(e)
  },
  openCreat() {
    wx.navigateTo({
      url: '../../../pages/createOrder/createOrder'
    })
  },
  getBtn(e) {
    wx.navigateTo({
      url: '../afterSaleDetailed/afterSaleDetailed',
    })
  }
})