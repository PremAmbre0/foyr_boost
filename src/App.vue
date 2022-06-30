<template> 
  <v-app id="app">
      <div>
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
#app{
    margin: 0 auto;
    background-color: $subtle-white;
}
.v-application--wrap{
  width: 144.1rem;
  height: 76.8rem;
}
</style>
