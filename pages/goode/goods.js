// pages/goode/goods.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList: [{
            name: "佛祖笑",
            goderNum: 1,
            img: ""
        }],
        goder: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
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