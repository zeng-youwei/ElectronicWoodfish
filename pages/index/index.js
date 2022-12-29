// pages/index/index.js
const util = require('../../utils/util.js')

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
        goder: 0,
        goderList: []
    },
    change: util.throttle(function () {
        util.playAudio(this.data.muyuSrc)
        // 木鱼动画
        this.animate('#muyu', [{
                scale: [0.9, 0.9]
            },
            {
                scale: [0.81, 0.81]
            },
            {
                scale: [0.77, 0.77]
            },
            {
                scale: [0.75, 0.75]
            },
            {
                scale: [1, 1]
            },
        ], 150, function () {
            this.clearAnimation('#muyu', function () {})
        }.bind(this))
        // 功德动画
        const listId = "a" + Date.now()
        this.data.goderList.push(listId)
        this.setData({
            goderList: this.data.goderList
        })
        this.animate('#' + listId, [{
                opacity: 1.0,
                top: "25%"
            },
            {
                opacity: 0.5,
                top: "19%"
            },
            {
                opacity: 0.5,
                top: "10%"
            },
            {
                opacity: 0.0,
                top: "5%"
            },
        ], 200, function () {
            this.clearAnimation('#muyu', () => {
                this.data.goderList.forEach((item, index, arr) => {
                    if (item == listId) arr.splice(index, 1);
                })
                this.setData({
                    goderList: this.data.goderList
                })
            })
        }.bind(this))

        this.updateGoder(1)
    }, 155),

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.storeBindings = createStoreBindings(this, {
            store,
            fields: ['goder','muyuSrc'],
            actions: ['updateGoder']
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
        this.storeBindings.detroyStoreBindings()
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