Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      afterSalesType: '设备检修',
      repairOrderNumber: '7474783384',
      storeName: '深圳奥迪专卖店',
      contact: '权志龙',
      contactNumber: '1344545656',
      cityArea: ['广东省', '深圳市', '南山区'],
      address: '科兴科学园C3栋7楼',
      installationDate: '2019-01-01',
      installationTime: '18：00',
      installationType: 'GPS',
      maintenanceReasons: '就是想检修'
    },
    detailed: [
      {
        title: '订单信息',
        detailedList: [
          {
            label: '售后类型',
            attributeName: 'afterSalesType'
          }, {
            label: '检修单号',
            attributeName: 'repairOrderNumber'
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
            label: '安装时间',
            attributeName: 'installationTime'
          }, {
            label: '安装类型',
            attributeName: 'installationType'
          }, {
            label: '检修原因',
            attributeName: 'maintenanceReasons'
          }
        ]
      }
    ]
  },
  onLoad() {
    for (let i in this.data.detailed) {
      for (let j in this.data.detailed[i].detailedList) {
        let value = 'detailed[' + i + '].detailedList[' + j + '].content'
        let attr = this.data.detailed[i].detailedList[j].attributeName
        this.setData({
          [value]: this.data.obj[attr]
        })
      }
    }
  }
  
})