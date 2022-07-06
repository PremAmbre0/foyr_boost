<template>
  <div class="container">
    <div class="nav">
      <content-calender-main-navigation @changeToMonthlyNavigation="setToMonthlyNavigation"
        @changeToWeeklyNavigation="setToWeeklyNavigation"></content-calender-main-navigation>
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
import ContentCalenderMainNavigation from "./ContentCalenderMainNavigation.vue";
import ContentCalenderWeeklyNavigation from "./ContentCalenderWeeklyNavigation.vue"
import ContentCalenderMonthlyNavigation from "./ContentCalenderMonthlyNavigation.vue";

export default {
  components: {
    ContentCalenderMainNavigation,
    ContentCalenderWeeklyNavigation,
    ContentCalenderMonthlyNavigation
  },
  data() {
    return {
      currentTabComponent: 'ContentCalenderWeeklyNavigation'
    }
  },

  computed: {
    ...mapGetters(['daysSelected'])
  },
  mounted() {
    this.getDaysAction(moment())
  },
  methods: {
    ...mapActions(['getDaysAction']),
    setToMonthlyNavigation() {
      this.currentTabComponent = 'ContentCalenderMonthlyNavigation'
    },
    setToWeeklyNavigation() {
      this.currentTabComponent = 'ContentCalenderWeeklyNavigation'
    }
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
