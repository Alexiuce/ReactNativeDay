<template>

    <div class="home">

      <!--头部视图-->
      <header-view></header-view>

      <!--列表视图-->
      <div class="tab">
        <div class="tab-item">
         <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>


      </div>
      <!--内容视图-->
      <router-view></router-view>
    </div>


</template>


<script>

  import headerView from "./header/header.vue"


  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Elm App',
      }
    },
    components:{
      headerView
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .tab {
     display: flex;
     width: 100%;
     height: 40px;
     line-height: 40px;
 }
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-item a{
    display: block;
    font-size: 14px;
    color: #778593;
  }
  .tab-item a.router-link-active{
    color: red;
  }


</style>
