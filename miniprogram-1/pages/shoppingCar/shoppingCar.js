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
       
       var th = this;
        var content = "";
        var isNextData = false;
        for(var i = 0 ; i <  this.data.cateItems.length; i ++){
          content += this.data.cateItems[i].id + "|" + this.data.cateItems[i].num + ",";
          if(this.data.cateItems[i].stock < 1){
            isNextData = true;
          }
        }
        if(isNextData){
          wx.showModal({
            title: '提示',
            content: '商品有预约商品，需要第二天才能取货!',
            success (res) {
              if (res.confirm) {
                th.submitContent(content);
                
              } else if (res.cancel) {
                
              }
            }
          });
        }else{
          th.submitContent(content);
        }
      


       
       
       
        console.log(content);
    },

    submitContent : function (content) {
      if(!this.data.nameInput){
        wx.showToast({
          title: '请输入姓名',
          icon : 'none',
          duration: 2000
        })
        return ;
      }
      if(!this.data.messCodeInput){
        wx.showToast({
          title: '请输入电话号码',
          icon : 'none',
          duration: 2000
        })
        return ;
      }
      if(!this.data.codeInput){
        wx.showToast({
          title: '请输入验证码',
          icon : 'none',
          duration: 2000
        })
        return ;
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
      wx.showLoading({
        title: '提交中',
      })
      wx.request({
        url: common.saveOrderUrl,
        data : data,
        method : "post",
        success : function(data){
          wx.hideLoading();
          if(data.data.resultCode == 1){
            wx.showToast({
              title: '下单成功!',
              icon : 'none',
              duration: 2000
            });
            setTimeout(function () {
              wx.navigateTo({
                url: '../product/product',
              });
            }, 2000)
         
           
          }else{
            wx.showToast({
              title: data.data.resultMessage,
              icon : 'none',
              duration: 2000
            })
          }
         
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' //修改此处即可
        }
      })

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
