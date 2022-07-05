<template>
  <div class="nav-container-one">
    <date-picker></date-picker>
    <div class="nav-toggle">
      <button class="nav-toggle-monthly">Monthly</button>
      <button class="nav-toggle-weekly">Weekly</button>
    </div>
    <div class="nav-today" @click="toToday()">Today</div>
  </div>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default 
{
  components: {
    DatePicker,
  },
}

</script>

<style lang="scss" scoped>
.nav-container-one {
  width: 103.967rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.363rem 3.083rem 4.203rem 1.362rem;
}

.nav-toggle {
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.4rem;
  height: 3.2rem;
  border: 1px solid $light-grey-two;
  border-radius: 0.8rem;
  flex: none;
  order: 0;
  flex-grow: 0;

  &-monthly {
    height: 3.2rem;
    width: 6.1rem;
    border-right: 0.05rem solid $light-grey-two;
  }

  &-weekly {
    height: 3.2rem;
    width: 6.1rem;
    border-left: 0.05rem solid $light-grey-two;
  }
}


.nav-today {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.4rem 2.4rem;
  width: 8.7rem;
  height: 3.2rem;
  background: $black-two;
  border-radius: 0.8rem;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: $white;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>