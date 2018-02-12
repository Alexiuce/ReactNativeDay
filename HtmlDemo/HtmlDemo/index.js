console.log("hello");
document.write('<h1>this is h1 text</h1>')



var index = 1
function clickSubmit() {
  index++
  if(index >3){index = 1}
  console.log(index);
  document.getElementById('imageView').src='img/' +index +'.jpg'
}

var time

/* JQuery 页面加载方法 */
$(function () {
  document.getElementById('jsf').onclick = function () {
    document.getElementsByTagName('h1')[0].innerHTML = 'js code modify h1'
  }

  $('#jqf').click(function () {
    $('h1').html("jquery modify h1")
  })
})

/* JS 页面加载方法*/
// window.onload = function () {
//
// }


/*JQuery 方法*/


/* js */
function jsStart() {
  setInterval(clickSubmit,1000)
  time = setInterval(showAd,3000)

  setTabRow()
}




/* 显示定时广告图片 */
function showAd() {
  setAdImageDisplay(true)
  clearInterval(time)
  time = setInterval(hidenAd,3000)
}
/* 隐藏定时广告图片*/
function hidenAd() {
  setAdImageDisplay(false)
  clearInterval(time)
  time = setInterval(showAd,3000)
}
/* 设置图片显示或因此*/
function setAdImageDisplay(show) {
  var adImage = document.getElementById('adImageView')
  if (show == true){
      adImage.style.display = 'block'
  }else {
    adImage.style.display = 'none'
  }
}
/* 设置表格*/
function setTabRow() {

  var table = document.getElementById('mytable')
  var len = table.tBodies[0].rows.length
  for (var i = 0;i<len;i++){
    var table_row = table.tBodies[0].rows[i]
    if (i % 2 ==0){
      table_row.style.backgroundColor = 'red'
    }else {
      table_row.style.backgroundColor = 'blue'
    }
  }
}
/*
document.createTextNode() : 创建文本节点
document.createElement(param)  : 创建元素节点
param: 'p','div','li' .....
* */