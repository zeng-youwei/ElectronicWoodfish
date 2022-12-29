//在这个JS文件中，专门用来创建 Store 的实例对象
import {
    action,
    observable
} from 'mobx-miniprogram'
let goder = 0
let muyuSrc = ''
if (wx.getStorageSync("goder")) {
    goder = wx.getStorageSync("goder")
} else {
    wx.setStorageSync("goder", 0)
}

if (wx.getStorageSync("muyuSrc")) {
    muyuSrc = wx.getStorageSync("muyuSrc")
} else {
    wx.setStorageSync("muyuSrc", 'https://636c-cloud1-8giq8p4f3c24d19a-1316192639.tcb.qcloud.la/acoustics/%E9%BB%98%E8%AE%A4.mp3?sign=acbd15b2322792669d34fd915b06b4cb&t=1672303073')
}

export const store = observable({
    goder,
    muyuSrc,
    // 计算属性
    get getgoder() {
        return this.goder
    },
    // actions 方式，用来修改store中的数据
    updateGoder: action(function (step) {
        this.goder += step
        wx.setStorageSync('goder', this.goder)
    }),
    updateMuyuSrc: action(function (src) {
        this.muyuSrc = src
        wx.setStorageSync('muyuSrc', this.muyuSrc)
    }),

})