let dataArray = []

let exampleData = {
	date: "Seq 19 2016",
	title: "究天人之际,通古今之变,成一家之言",
	contentText: "黄帝者，少典之子，姓公孙，名曰轩辕。生而神灵，弱而能言，幼而徇齐，长而敦敏，成而聪明。轩辕之时，神农氏世衰。诸侯相侵伐，暴虐百姓，而神农氏弗能征。於是轩辕乃习用干戈，以征不享，诸侯咸来宾从。而蚩尤最为暴，莫能伐。炎帝欲侵陵诸侯，诸侯咸归轩辕。轩辕乃修德振兵，治五气，蓺五种，抚万民，度四方，教熊罴貔貅貙虎，以与炎帝战於阪泉之野。三战，然後得其志。蚩尤作乱，不用帝命。於是黄帝乃徵师诸侯，与蚩尤战於涿鹿之野，遂禽杀蚩尤。而诸侯咸尊轩辕为天子，代神农氏，是为黄帝。天下有不顺者，黄帝从而征之，平者去之，披山通道，未尝宁居",
	image: "/images/avatar/2.png",
	contentImage: "/images/post/cat.png",
	chatCount: 32,
	startCount: 85
}
let exampleData1 = {
	date: "白居易",
	title: "南湖早春",
	contentText: "风回云断雨初晴，返照湖边暖复明。乱点碎红山杏发，平铺新绿水蘋生。翅低白雁飞仍重，舌涩黄鹂语未成。不道江南春不好，年年衰病减心情。",
	image: "/images/avatar/1.png",
	contentImage: "/images/post/sls.jpg",
	chatCount: 39,
	startCount: 12
}

dataArray.push(exampleData)
dataArray.push(exampleData1)

module.exports = {
	postList: dataArray
}