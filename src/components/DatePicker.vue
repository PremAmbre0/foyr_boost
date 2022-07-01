<template>
  <div class="conatiner d-flex">
    <v-btn class=" btn btn-left" plain :close-on-content-click="this.dates.length == 2 ? true : false" icon x-small
      @click="$emit('leftButtonEvent')"><img src="../assets/orange-arrow.svg" />
    </v-btn>
    <div class="d-flex">
      <v-menu v-model="menu" :close-on-content-click="datePickerPopupControl" :nudge-right="40"
        transition="scale-transition" offset-y min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <div class="date">{{ displayDateText }}</div>
          <v-btn v-model="dates" v-bind="attrs" v-on="on" plain icon x-small><img src="../assets/down-arrow.svg" />
          </v-btn>
        </template>
        <v-date-picker v-model="dates" range @change="$emit('updateDates', dates[0])">
        </v-date-picker>
      </v-menu>
    </div>
    <v-btn class=" btn btn-right" plain icon x-small @click="$emit('rightButtonEvent'); 'menu=false'"><img
        src="../assets/orange-arrow.svg" />
    </v-btn>
  </div>
</template>


<script>
import moment from 'moment'
export default {
  emits: ['leftButtonEvent', 'rightButtonEvent', 'updateDates'],
  props: {
    days: {
      required: true,
    }
  },
  data() {
    return {
      menu: false,
      dates: [],
      datePickerPopupControl: false,
    }
  },
  watch: {
    dates() {
      if (this.dates.length == 1) {
        this.datePickerPopupControl = false;
      }
      else {
        this.datePickerPopupControl = true;
      }
    },
    datePickerPopupControl() {
      if (this.datePickerPopupControl == true) {
        this.setDates()
      }
    }
  },
  computed: {
    displayDateText() {
      return `${moment(this.days[0]).format("MMMM DD")} - ${moment(this.days[4]).format("MMMM DD")} ,${moment().format("YYYY")}`
    },
  },
  mounted() {
    this.setDates()
  },
  methods: {
    setDates() {
      this.dates = [this.days[0].format('YYYY-MM-DD'), this.days[4].format('YYYY-MM-DD')]
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 4rem;

}

.date {
  display: flex;
  max-width: 15rem;
  height: 2.4rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: #3A393A;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.btn {
  width: 7.33px;
  height: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;

  &-left {
    margin-right: 2.5rem;

    transform: rotate(180deg);
  }

  &-right {
    margin-left: 2.5rem;
    transform: rotate(0deg);
  }
}
</style>