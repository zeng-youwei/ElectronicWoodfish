// components/good/good.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from "../../store/store"
import {playAudio} from '../../utils/util'
Component({
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        //数据源
        store,
        fields:{
            goder:'goder',
        },
        actions:{
            updateGoder:'updateGoder',
            updateMuyuSrc:'updateMuyuSrc'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    

    /**
     * 组件的方法列表
     */
    methods: {
        consume(){
            wx.showModal({
                title: '提示',
                content: '是否消耗'+ this.properties.item.goderNum + '个功德点',
                success:  (res)=> {
                  if (res.confirm) {//这里是点击了确定以后
                   this.updateGoder(-this.properties.item.goderNum)
                   playAudio(this.properties.item.src)
                   if (this.properties.item.type == '音效') {
                   this.updateMuyuSrc(this.properties.item.src)
                   }
                  } else {//这里是点击了取消以后
                    console.log('用户点击取消')
                  }
                }
              })
        },
    }
})