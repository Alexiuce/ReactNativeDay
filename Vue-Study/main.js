

/*注册组件*/
Vue.component('vuediv',{
  template:'<p></p>'
})

// 注册
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})



new Vue({

    el:'#app',
    data:{
      message:'Hello Vue.js',
      itemArray:[
        {name:'alex'},
        {name:'bob'},
        {name:'david'},
        {name: 'jack'},
        {name:'tom'}
          ]
    },
    methods:{
      clickButton:function () {
        this.message += 'go'
      }
    }
  })

// 注册
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})
// 创建根实例
new Vue({
  el: '#app1'
})

