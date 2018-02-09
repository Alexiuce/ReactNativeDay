<template>
  <div class="hello">
    <h1>{{msg}}</h1>

    <input v-model="message"  v-on:keyup.enter="addNewItem">
    <p>Message is: {{ message }}</p>
    <ul>
      <li v-for = "item in todoArray" 
          v-bind:class="{finished:item.isFinished}"
          v-on:click="toggleFinish(item)">

          {{item.label}}
      </li>
    </ul> 

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is a Todo List',
      message:"hello mode",
      todoArray:[
          {
            label:'coding',
            isFinished:true
          },
          {
            label:'working',
            isFinished:true
          },
          {
            label:'nothing',
            isFinished:false
          }
      ]
    }
  },
  props:['msg1'],
  methods:{
     toggleFinish:function (item) {
        // body...
        item.isFinished = !item.isFinished
      },
      addNewItem:function () {
        // body...
        console.log(this.message)
        this.todoArray.push({
          label:this.message,
          isFinished:false
        })

        this.message=""
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  /*list-style-type: none;*/
  padding: 30;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}

.finished{
  text-decoration: underline;
}
</style>
