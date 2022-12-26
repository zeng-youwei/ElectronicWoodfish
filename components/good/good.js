// components/good/good.js
Component({
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
                success: function (res) {
                  if (res.confirm) {//这里是点击了确定以后
                    console.log('用户点击确定')
                  } else {//这里是点击了取消以后
                    console.log('用户点击取消')
                  }
                }
              })
        },
    }
})