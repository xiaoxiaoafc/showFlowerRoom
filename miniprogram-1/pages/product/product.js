// pages/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "蛋糕",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '洁面皂',
            image: "https://img.pic88.com/preview/2020/08/03/1596421282177938.jpg?imageMogr2/quality/100!/crop/!640x-0-20|watermark/3/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvcGljODgtd2F0ZXIucG5n/gravity/Center/dissolve/100/dx/0/dy/10/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvd2gyMzBiZy5wbmc=/dx/0/dy/25/text/SUTvvJoxMjAyMDA3MTcxMzUzNTMyNjEzNzg=/fill/I0ZGRkZGRg==/fontsize/320/dx/30/dy/30"
          },
          {
            child_id: 2,
            name: '卸妆',
            image: "https://img.pic88.com/preview/2020/08/03/1596421282177938.jpg?imageMogr2/quality/100!/crop/!640x-0-20|watermark/3/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvcGljODgtd2F0ZXIucG5n/gravity/Center/dissolve/100/dx/0/dy/10/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvd2gyMzBiZy5wbmc=/dx/0/dy/25/text/SUTvvJoxMjAyMDA3MTcxMzUzNTMyNjEzNzg=/fill/I0ZGRkZGRg==/fontsize/320/dx/30/dy/30"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "面包",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '气垫bb',
            image: "https://img.pic88.com/preview/2020/08/03/1596421282177938.jpg?imageMogr2/quality/100!/crop/!640x-0-20|watermark/3/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvcGljODgtd2F0ZXIucG5n/gravity/Center/dissolve/100/dx/0/dy/10/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvd2gyMzBiZy5wbmc=/dx/0/dy/25/text/SUTvvJoxMjAyMDA3MTcxMzUzNTMyNjEzNzg=/fill/I0ZGRkZGRg==/fontsize/320/dx/30/dy/30"
          },
          {
            child_id: 2,
            name: '修容/高光',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604990719445&di=4b810d9cf1973de1888cba352daa92bd&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130318%2F6983813_155242755158_2.jpg"
          },
          {
            child_id: 3,
            name: '遮瑕',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604990719445&di=4b810d9cf1973de1888cba352daa92bd&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130318%2F6983813_155242755158_2.jpg"
          },
          {
            child_id: 4,
            name: '腮红',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604990719445&di=4b810d9cf1973de1888cba352daa92bd&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130318%2F6983813_155242755158_2.jpg"
          },
          {
            child_id: 5,
            name: '粉饼',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604990719445&di=4b810d9cf1973de1888cba352daa92bd&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130318%2F6983813_155242755158_2.jpg"
          },
          {
            child_id: 6,
            name: '粉底',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
          },
          {
            child_id: 7,
            name: '蜜粉/散粉',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
          },
          {
            child_id: 8,
            name: '隔离霜',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "奶酪/馅饼",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '淡香水EDT',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
          },
          {
            child_id: 2,
            name: '浓香水EDP',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159789883.jpg"
          },
          {
            child_id: 3,
            name: '香体走珠',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815979307.jpg"
          },
          {
            child_id: 4,
            name: '古龙香水男士的最爱',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159765589.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchRightTab: function (e) {
      // 获取item项的id，和数组的下标值  
      let id = e.target.dataset.id,
        index = parseInt(e.target.dataset.index);
      // 把点击到的某一项，设为当前index  
      this.setData({
        curNav: id,
        curIndex: index
      })
    },
    onReady: function () {
      const arr = []
      for (let i = 0; i < 100; i++) arr.push(i)
      this.setData({
        arr
      })
  
      setTimeout(() => {
        this.setData({
          triggered: true,
        })
      }, 1000)
    },
  
    onPulling(e) {
      console.log('onPulling:', e)
    },
  
    onRefresh() {
      if (this._freshing) return
      this._freshing = true
      setTimeout(() => {
        this.setData({
          triggered: false,
        })
        this._freshing = false
      }, 3000)
    },
  
    onRestore(e) {
      console.log('onRestore:', e)
    },
  
    onAbort(e) {
      console.log('onAbort', e)
    },
  

  }
})
