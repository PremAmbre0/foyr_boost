<template>
  <div class="container">
    <div class="nav">
      <content-calender-main-navigation></content-calender-main-navigation>
      <content-calender-weekly-navigation></content-calender-weekly-navigation>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters , mapActions} from "vuex";
import ContentCalenderMainNavigation from "./ContentCalenderMainNavigation.vue";
import ContentCalenderWeeklyNavigation from "./ContentCalenderWeeklyNavigation.vue"

export default {
  components: {
    ContentCalenderMainNavigation,
    ContentCalenderWeeklyNavigation
  },

  computed:{
    ...mapGetters(['daysSelected'])
  },
  mounted() {
      this.getDaysAction(moment())
  },
  methods: {
    ...mapActions(['getDaysAction']),
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  height: 102.793rem;
  width: 108.412rem;
  overflow-y: hidden;
  background-color: $white;
}

.nav-container-one {
  width: 103.967rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.363rem 3.083rem 4.203rem 1.362rem;
}
</style>
