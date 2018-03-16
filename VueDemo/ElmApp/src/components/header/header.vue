<template>

 <div class="header-view">
    <!--内容部分-->
      <div class="content-wrapper">
        <!--  左边图标-->
          <div class="avatar-seller">
            <img :src="seller.avatar"/>
          </div>
        <!-- 右边内容 : 品牌, title, name ,优惠 -->
          <div class="right-content">
            <div class="title">
              <span class="band-icon"></span>
              <span class="seller-name">{{seller.name}}</span>
            </div>
            <!--快递信息-->
            <div class="delivery-info">
              {{seller.description + "  /  " + seller.deliveryTime + "分钟" }}
            </div>
            <!--优惠支持-->
            <div class="support" v-if="seller.supports">
              <span class="support-icon" :class="this.classMap[seller.supports[0].type]"></span>
              <span class="support-info">{{seller.supports[0].description}}</span>
            </div>
          </div>
        <div v-if="seller.supports" class="support-count">
          <span>{{seller.supports.length}}个 > </span>
        </div>
      </div>
   <!--底部footer部分-->
      <div class="bulletin-wrapper">
        <span class="bulletin-icon"></span>
        <span class="bulletin-text">{{seller.bulletin}}</span>
        <span class="bulletin-end"> > </span>
      </div>
 </div>

</template>

<!------------------------- 脚本部分 ------------------------------>

<script>

export default {
  name:"HeaderView",
  props:{
    seller:{}
  },
  data(){
    return {
      message:"hello header"
    }
  },
  created() {
    this.classMap = ["decrease","discount","guarantee","invoice","special"]
  }
}

</script>

<!-------------------------- 样式部分  ----------------------------->
<style lang="stylus" >

  @import "../../common/stylus/mixin.styl";


  .header-view{
    display: flex;
    color: #fff;
    font-size: 0px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #999;
    position :relative;
  }

  .content-wrapper{
    padding: 24px 18px 12px 24px;
  }

  .avatar-seller{
    display: inline-block;
    vertical-align : top;
  }

  .avatar-seller img {
    width: 64px;
    height: 64px;
    border-radius:2px;

  }

  .right-content{
  display: inline-block;
  text-align: left;
  font-size: 14px;
  margin-left: 16px;
  }
  .title{
    margin: 2px 0px 8px 0px;

  }
  .band-icon{
    display: inline-block;
    vertical-align:top;
    width: 30px;
    height: 18px;
    bg-image('brand')
    background-size 30px 18px;
    background-repeat :no-repeat;
  }
.seller-name{
  margin-left :6px;
  font-size 16px;
  font-weight:bold;
}
.delivery-info{
  margin-bottom :10px;
  line-height :12px;
  font-size :12px;
}

.support-icon{
  display :inline-block;
 vertical-align :top ;
  width :12px;
  height :12px;
  margin-right :4px;
  background-size 12px 12px;
}
.decrease{
  bg-image('decrease_1')
}
.discount{
  bg-image('discount_1')
}

.guarantee{
  bg-image('guarantee_1')
}
.invoice{
  bg-image('invoice_1')
}

.special{
  bg-image('special_1')
}

.support-info{
  font-size :12px;
  line-height :10px;
}

.support-count{
  position :absolute;
  right: 12px;
  bottom :18px;
  padding :0 8px;
  line-height 24px;
  height :24px;
  border-radius :14px;
  background-color :rgba(0,0,0,0.2)
  text-align : center;
  font-size :10px;

}


.bulletin-wrapper{
  height :28px;
  line-height :28px;
  font-size: 14px;
  padding :0 100px 0 12px;

  overflow: hidden;
  text-overflow: ellipsis
  }

.bulletin-text{

}

</style>
