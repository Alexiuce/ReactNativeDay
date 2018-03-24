Page({

  /** 自定义事件方法: 
	 * */ 
	onTap:function(){
	
		// wx.navigateTo({
		// 	url: '../posts/post',
		// })
		wx.redirectTo({
			url: '../posts/post',
		})	
	}
})