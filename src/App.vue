<template>
  <div id="app">
    <content-cal-weekly></content-cal-weekly>
  </div>
</template>

<script>
import ContentCalWeekly from "./components/ContentCalWeekly.vue";

export default{
  components:{
    ContentCalWeekly
  }
}

</script>

<style lang="scss">
#app {
  height:inherit;
  width: inherit;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
