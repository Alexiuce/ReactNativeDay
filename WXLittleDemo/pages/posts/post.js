let postData = require('../../data/post-data.js')

Page({

  /**
   * 页面的初始数据
   */
	data: {
	},

  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		this.setData({ listArray: postData.postList})
	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {
		console.log("onReady")
	},

  /**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {
		console.log("onShow")
	},

  /**
   * 生命周期函数--监听页面隐藏
   */
	onHide: function () {

	},

  /**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {

	},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
	onPullDownRefresh: function () {

	},

  /**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {

	},

  /**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {

	},
	/** 自定义事件 */
	onPostTap: function (event) {
		console.log(event)
		wx.navigateTo({
			url: '../post-detail/post-detail',
		})
	}
})