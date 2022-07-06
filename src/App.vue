<template> 
  <v-app id="app">
      <div>
      <the-header></the-header>
      <section class="navigation-section">
      <navigation-menu></navigation-menu>
      <content-calender></content-calender>
      </section>
    </div>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ContentCalender from "./components/ContentCalender.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
export default{
  components:{
    TheHeader,
    ContentCalender,
    NavigationMenu
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
.navigation-section{
display: flex;  
width: 144rem;
height: 76.8rem;

}
</style>
