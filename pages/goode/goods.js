// pages/goode/goods.js

import {
    createStoreBindings
  } from 'mobx-miniprogram-bindings'
  import {
    store
  } from '../../store/store'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    tabs:[{
        title:'放生',
        goodsList: [{
            name: "放生矿泉水",
            goderNum: 10,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E7%9F%BF%E6%B3%89%E6%B0%B4.jpg?sign=6d498cbeb5bc5584651012c8d800643b&t=1672294445",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E7%9F%BF%E6%B3%89%E6%B0%B4.wav?sign=cc4e1c47389af582c9b2296567ad96ca&t=1672294486"
        },
        {
            name: "放生KUN",
            goderNum: 20,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E5%9D%A4.png?sign=e5caed269d8be1c451059fbfa22797d8&t=1672294605",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E5%9D%A4.wav?sign=8566c48ccd58c52f95dd2142ceff92c4&t=1672294646"
        },
        {
            name: "放生哥斯拉",
            goderNum: 30,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E5%93%A5%E6%96%AF%E6%8B%89.png?sign=def3baad4a4d86f4d33e8a53fdd69e7c&t=1672294697",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E5%93%A5%E6%96%AF%E6%8B%89.wav?sign=91a25bdc6ea4b4e8dd078398dc56acd6&t=1672294752"
        },{
            name: "佛祖陪你笑",
            goderNum: 99,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E4%BD%9B%E7%A5%96%E9%99%AA%E4%BD%A0%E7%AC%91.jpg?sign=ee227231f22842227b89160a183a7602&t=1672294792",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/fangshen/%E4%BD%9B%E7%A5%96%E9%99%AA%E4%BD%A0%E7%AC%91.wav?sign=302897eefae5dec02876eda54338f739&t=1672294824"
        }]
    },{
        title:'音效',
        goodsList:[{
            name: "默认",
            type:"音效",
            goderNum: 0,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E9%BB%98%E8%AE%A4.jpg?sign=c61a0598b27ea8b26efae1df55f2011e&t=1672303049",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E9%BB%98%E8%AE%A4.mp3?sign=acbd15b2322792669d34fd915b06b4cb&t=1672303073"
        },{
            name: "木鱼",
            type:"音效",
            goderNum: 10,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E6%9C%A8%E9%B1%BC.jpg?sign=8d13884d4cd383ba98d66a4d99dca1ea&t=1672303135",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E6%9C%A8%E9%B1%BC.wav?sign=26757f7446289fb63e58bca41f542df2&t=1672303161"
        },{
            name: "枪声",
            type:"音效",
            goderNum: 20,
            img: "https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E5%BC%80%E6%9E%AA.jpg?sign=743737b6c29368e113af91da8bdc173a&t=1672303189",
            src:"https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E5%BC%80%E6%9E%AA.wav?sign=ab77d58f07ad8982ef98bc95f9ccda45&t=1672303227"
        }]
    }],
    activeTab: 0,
    },

    onTabClick(e) {
        const index = e.detail.index
        this.setData({ 
          activeTab: index 
        })
      },
    
      onChange(e) {
        const index = e.detail.index
        this.setData({ 
          activeTab: index 
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.storeBindings = createStoreBindings(this, {
            store,
            fields: ['goder'],
            actions: ['updateGoder','updateMuyuSrc']
          })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (wx.getStorageSync("goder")) {
            this.setData({
                goder: wx.getStorageSync("goder")
            })
        } else {
            wx.setStorageSync("goder", 0)
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})