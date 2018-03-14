<template>

    <div class="home">

      <!--头部视图-->
      <header-view :seller="seller"></header-view>

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


  const ERROR_OK = 0
  export default {
    name: 'HelloWorld',
    data () {
      return {
        seller: {}
      }
    },
    created() {

      this.$http.get('/api/seller').then((response) => {
          response = response.body

          if (response.errorCode == ERROR_OK){
            this.seller= response.data
          }
      })
    },
    components:{
      headerView
    }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

 .tab {
     display: flex;
     width: 100%;
     height: 40px;
     align-items: center;
     border-bottom: 1px solid rgba(7,17,27,0.1);
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
  .tab-item a.active{
    color: red;
  }


</style>
