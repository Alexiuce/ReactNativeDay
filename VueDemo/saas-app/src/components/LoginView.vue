<template>

  <div class="loginView">
    <!--顶部图片-->
    <img src="../assets/reg-icon.png" class="reg-icon"/>
    <!--注册登录-->
    <div class="loginItem">

      <div class="username">
      <span >用户名</span>
        <input type="text" placeholder="请输入用户名" /><br/>
      </div>

      <div class="password">
        <span>密码</span>
        <input type="password" placeholder="请输入密码"/>
        <img src="../assets/password.png" height="7" width="17"/>
      </div>


      <button class="loginButton"  v-on:click="regist_user" >登录</button>
      <p >
        30秒注册,立即开通
        <img src="../assets/right-arrow.png" width="14" height="14"/>
      </p>
      <p>忘记密码?</p>

    </div>

    <p>
      {{msg}}
    </p>
  </div>

</template>

<script>
export default {
  name:'LoginView',
  data(){
    return{
      msg:'this is a demo for vue'
    }
  },
  methods:{
    regist_user:function () {
      console.log('adf')
    }
  }

}

</script>


<style>
span{
  font-size: 15px;
}
input {
  border: none;
  outline:none;
  font-size: 15px;
}
.loginView {
  background-color: #ecf2f6;

}

.loginItem {

  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow:  1px 1px 2px #e0eaf1;

}
.username {
  width: 85%;
  text-align: left;
  height: 40px;
  line-height: 40px;
  margin: auto;
  border-bottom: 1px solid #dedede;

}
.password{

  margin: auto;
  text-align: left;
  width: 85%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dedede;
}
.reg-icon {
  width: 100%;
}

.loginButton {
  margin-top: 20px;
  width: 85%;
  height: 34px;
  background-color: #4182f7;
  border-radius: 5px;
  border:none;
  font-size: 20px;
  color: white;


}

</style>
