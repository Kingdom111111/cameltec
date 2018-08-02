var app = getApp();
Page({
  onTap: (event) => {
    // wx.navigateTo({
    //   url: '../posts/post',
    // });   //平行跳转，由主页面跳到子页面

    // wx.redirectTo({
    //   url: '../posts/post',
    // })   //平级跳转

    wx.switchTab({
      url: '../posts/post', //拥有tabbar页面才可以跳转
    });
  },

  //二维码扫描
  // scanQRCode:function(){
  //   wx.scanCode({
  //     success: function (result) {
  //       wx.showModal(
  //         {
  //           content: JSON.stringify(result)
  //         })
  //     },
  //     fail: function (error) {
  //       wx.showModal(
  //         {
  //           content: JSON.stringify(error)
  //         })
  //     }
  //   })
  // }
  scanQRCode: function () {

    // wx.request({
    //   url: app.globalData.doubanBase + '/v2/movie/coming_soon',
    //   method: 'GET',
    //   data: 'pageSize=1&pageNum=10',    //参数为键值对字符串
    //   header: {
    //     //设置参数内容类型为x-www-form-urlencoded
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     var title;
    //     var genres;
    //     var alt;
    //     var name;
    //     var image;
    //     var value = res.data.subjects;
    //     for (var m in res.data.subjects) {
    //       console.log("标题:" + value[m].title)
    //       console.log("剧情:" + value[m].genres)
    //       console.log("链接:" + value[m].title)
    //       console.log("主演:" + value[m].title)
    //       console.log("标题:" + value[m].title)
    //       console.log("标题:" + value[m].casts[0].alt)

    //     }
    //     console.log(res.data.subjects.length + "================")
    //   }

    // })
    wx.getUserInfo({
      success: function(res){
        console.log("用户信息;"+res.userInfo);
      },
      complete: function() {
        console.log("接口调用结束")
      }
    })
  },

  userInfoHandler: function (e) {
    var userInfo = e.detail.userInfo;
    console.log(e)
    console.log("姓名：" + userInfo.nickName)
    console.log("头像" + userInfo.avatarUrl)
    console.log("姓名：" + userInfo.nickName)
    if (!userInfo) {
      console.log("用户授权了信息");
    } else {
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法正常使用******的功能体验。请10分钟后再次点击授权，或者删除小程序重新进入。',
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击了确定")
          } else {
            console.log("用户点击了取消");
          }

        }
      })
    }
  }
})