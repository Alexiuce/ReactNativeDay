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
          <span class="support-icon"></span>
          <span class="support-info">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <!--底部footer部分-->
    <div class="bulletin-wrapper">
       {{message}}
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
  }
}

</script>

<!-------------------------- 样式部分  ----------------------------->
<style>

  .header-view{
    display: flex;
    color: #fff;
    font-size: 0px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #000;
  }

  .content-wrapper{
    padding: 24px 18px 12px 24px;
  }

  .avatar-seller{
    display: inline-block;
  }
  .avatar-seller img {
    width: 64px;
    height: 64px;
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
    width: 30px;
    height: 18px;
  }


  .bulletin-wrapper{
    font-size: 14px;
  }

</style>
