<template>
  <div id="app">

    <sahead></sahead>
    <div class="tab">
      i am tab
    </div>

    <div class="content">
      i am content
    </div>
  </div>
</template>

<script>
import headview from './components/Header/SAHead.vue'

export default {
  components: {
    sahead: headview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
