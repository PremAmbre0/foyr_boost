<template>
  <v-app>
    <div id="app">
    <search-bar></search-bar>
    <content-calender></content-calender>
  </div>
  </v-app>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ContentCalender from "./components/ContentCalender.vue";
export default{
  components:{
    SearchBar,
    ContentCalender
}
}

</script>

<style lang="scss">
#app {
  width: 108.412rem;
  height: 102.793rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
