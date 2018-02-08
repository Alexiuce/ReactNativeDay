

/*注册组件*/
Vue.component('vuediv',{
  template:'<p>heh ....heh</p>'
})

// 注册
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// 注册
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
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


