Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      storeName: '深圳奥迪专卖店',
      contact: '胡悦',
      contactNumber: '134656434321',
      cityArea: '广东省，深圳市，南山区',
      address: '科兴科学园C3栋7楼',
      installationDate: '2019.1.1',
      installationType: 'GPS',
      equipmentNumber: '787792773',
      brandModel: 'Audi/TTS Roadster',
      vehicleColor: '红色',
      frameNumber: 'LZWADAGA8JB257701',
      ownerName: '徐振华',
      carOwnerPhone: '13554857858'
    },
    detailed: [{
      title: '订单信息',
      detailedList: [{
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
        label: '设备编码',
        attributeName: 'brandModel'
      }]
    }, {
      title: '车辆信息',
      detailedList: [{
        label: '品牌车型',
        attributeName: 'brandModel'
      }, {
        label: '车辆颜色',
        attributeName: 'vehicleColor'
      }, {
        label: '车架号',
        attributeName: 'frameNumber'
      }],
    }, {
      title: '车主信息',
      detailedList: [{
        label: '车主姓名',
        attributeName: 'ownerName'
      }, {
        label: '车主电话',
        attributeName: 'carOwnerPhone'
      }]
    }]
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