// pages/product/product.js
var common = require('../../comm/constant.js');
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
    cardItems : [],
    carNum : 0,
    totalPrice :0.00,
    cateItems: [],
    curNav: 1,
    curIndex: 0,
    

  },

  /**
   * 组件的方法列表
   */
  methods: {

    toOrder : function(){
      if(this.data.cardItems.length == 0){
        wx.showToast({
          title: '购物车为空！',
          icon: 'none',
          duration: 2000
        })
    
      }else{
        wx.navigateTo({
          url: '../shoppingCar/shoppingCar?cardItems= ' + JSON.stringify(this.data.cardItems),
        })
      }

     
    },
    addCarTab : function(e){
      var product = e.target.dataset;
      var cardItems = this.data.cardItems;
      var isAdd = true;
      for(var i = 0; i < cardItems.length; i ++){
        if(cardItems[i].id == product.id){
          cardItems[i].num = cardItems[i].num + 1;
          cardItems[i].totalPrice = cardItems[i].price * cardItems[i].num;
          isAdd = false;
        }
      }
      if(isAdd){
        product.num = 1;
        product.totalPrice = product.price;
        product.stock = product.stock;
        this.data.cardItems.push(product);
      }
      
      console.log(this.data.cardItems);
      this.data.carNum = this.data.carNum + 1  ;
      this.data.totalPrice =  this.data.totalPrice + product.price;
      this.setData({
        carNum : this.data.carNum,
        totalPrice : this.data.totalPrice
      });

    },
    findProduct : function(cateItems,index){
      var th = this;
        wx.request({
          url: common.productUrl + "?type=" + cateItems[index].cate_id,
          method : "post",
          success : function(data){
            var childDatas = data.data.data;
            var children = [];
            for(var i = 0; i < childDatas.length; i ++){
              var c = {};
              c.child_id = childDatas[i].id;
              c.name = childDatas[i].name;
              c.image = childDatas[i].picture;
              c.price = childDatas[i].price;
              c.stock = childDatas[i].stock;
              c.des = childDatas[i].des;
              children.push(c);
            }
            cateItems[index].children = children;
            if(children.length > 0){
              cateItems[index].ishaveChild = true;
            }else{
              cateItems[index].ishaveChild = false;
            }
            
            th.setData({
              cateItems : cateItems,
              curNav: cateItems[index].cate_id,
              curIndex: index
            })
            
          }
        })
    },

    switchRightTab: function (e) {
      // 获取item项的id，和数组的下标值  
      let id = e.target.dataset.id,
        index = parseInt(e.target.dataset.index);
      // 把点击到的某一项，设为当前index  
      this.findProduct(this.data.cateItems,index);
      this.setData({
        curNav: id,
        curIndex: index
      })
    },
    onReady: function () {
      var th =  this;
      wx.request({
        url: common.productTypeUrl,
        success : function(data){
          var dataCateItems = data.data.data.content;
          var cateItems = [];
          for(var i = 0; i < dataCateItems.length; i++){
            var cateItem = {};
            var cData = dataCateItems[i];
            cateItem.cate_id = cData.id;
            cateItem.cate_name = cData.name;
            cateItems.push(cateItem);
          }
          th.findProduct(cateItems,0);
        }
      })
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
