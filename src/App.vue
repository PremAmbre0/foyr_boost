<template> 
  <v-app id="app">
      <div>
      <the-header></the-header>
      <content-calender></content-calender>
    </div>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ContentCalender from "./components/ContentCalender.vue";
export default{
  components:{
    TheHeader,
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
