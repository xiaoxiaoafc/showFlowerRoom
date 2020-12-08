// pages/shoppingCar/shoppingCar.js
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
    cateItems : [],
    ypeisong:"block",
    senCodeText : "获取验证码",
    sendCode : "",
    nameInput : "",
    messCodeInput : "",
    codeInput : "",
    addressInput : ""

  },

  /**
   * 组件的方法列表
   */
  methods: {

    submitOrder : function(){
        console.log(this.data.codeInput);
        var content = "";
        for(var i = 0 ; i <  this.data.cateItems.length; i ++){
          content += this.data.cateItems[i].id + "|" + this.data.cateItems[i].num + ",";
        }
        var timestamps = Math.round(new Date().getTime() / 1000).toString();
        var data = {
          phonecode : this.data.codeInput,
          paytime : timestamps,
          phone : this.data.messCodeInput,
          sendtime: timestamps,
          content:content,
          name : this.data.nameInput,
          address : this.data.addressInput,
          ttp: this.data.peisong == "block" ? 1 : 0,
          state : 0,
          id:1
        }

        wx.request({
          url: common.saveOrderUrl,
          data : data,
          method : "post",
          success : function(data){
            console.log(data);
            wx.navigateTo({
              url: '../product/product',
            })
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' //修改此处即可
          }
        })

        console.log(content);
    },

    addressInput : function(e){
      this.setData({
        addressInput: e.detail.value,
      })
    },
    codeInput : function(e){
      this.setData({
        codeInput: e.detail.value,
      })
    },
    phoneinput : function(e){
      this.setData({
        messCodeInput: e.detail.value,
      })
    },

    nameInput : function(e){
      this.setData({
        nameInput: e.detail.value,
      })
    },
    messCodeInput : function(e){
      this.setData({
        sendCode: e.detail.value,
      })
    },

    sendCode : function(){
      if(this.data.senCodeText !='获取验证码'){
        return;
      }
      wx.request({
        url: common.sendCode + "?phone=" + this.data.messCodeInput,
        method : "post"
        
      })
      var i = 1;
      var th = this;
      th.setData(
        {
          senCodeText:1
        }
      );

     var senid =  setInterval(function(){
        i ++;
        if(i == 11){
          th.data.senCodeText = "获取验证码";
          i = "获取验证码";
          clearInterval(senid);
        }
        th.setData(
          {
            senCodeText: i
          }
        );
      },1000)
    },
    peisong : function(e){
      var data = e.target.dataset;
      if(data.c == 1){
         this.setData({
          ypeisong:"block"
         });
      }else{
        this.setData({
          ypeisong:"none"
         });
      }
      
    },
    onLoad:function(options){
        var cardItems = JSON.parse(options.cardItems);
        var totalPrice = 0;
        for(var i = 0; i < cardItems.length; i ++){
          console.log(cardItems[i]);
          totalPrice += cardItems[i].totalPrice;
        }
        this.setData({
          cateItems : cardItems,
          totalPrice : totalPrice
        });
    }

  }
})
