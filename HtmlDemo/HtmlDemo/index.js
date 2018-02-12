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
window.onload = function () {
  setInterval(clickSubmit,1000)
  time = setInterval(showAd,3000)

  setTabRow()
}


function showAd() {
  setAdImageDisplay(true)
  clearInterval(time)
  time = setInterval(hidenAd,3000)
}

function hidenAd() {
  setAdImageDisplay(false)
  clearInterval(time)
  time = setInterval(showAd,3000)
}

function setAdImageDisplay(show) {
  var adImage = document.getElementById('adImageView')
  if (show == true){
      adImage.style.display = 'block'
  }else {
    adImage.style.display = 'none'
  }
}

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