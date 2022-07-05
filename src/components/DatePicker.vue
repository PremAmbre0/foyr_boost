<template>
  <div class="conatiner d-flex">
    <v-btn class=" btn btn-left" plain :close-on-content-click="this.dates.length == 2 ? true : false" icon x-small
      @click="addDays"><img src="../assets/orange-arrow.svg" />
    </v-btn>
    <div class="d-flex">
      <v-menu v-model="menu" :close-on-content-click="datePickerPopupControl" :nudge-right="40"
        transition="scale-transition" offset-y min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <div class="date">{{ displayDateText }}</div>
          <v-btn v-model="dates" v-bind="attrs" v-on="on" plain icon x-small><img src="../assets/down-arrow.svg" />
          </v-btn>
        </template>
        <v-date-picker v-model="dates" range @change="updateCalenderDates" header-color="#ED737C"
      color="#E9BEB3">
        </v-date-picker>
      </v-menu>
    </div>
    <v-btn class=" btn btn-right" plain icon x-small @click="subtractDays"><img src="../assets/orange-arrow.svg" />
    </v-btn>
  </div>
</template>


<script>
import moment from 'moment'
import { mapActions ,mapGetters } from 'vuex';
export default {
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
      return `${moment(this.daysSelected[0]).format("MMMM DD")} - ${moment(this.daysSelected[4]).format("MMMM DD")} ,${moment().format("YYYY")}`
    },    
    ...mapGetters(['daysSelected'])
  },
  mounted() {
    this.setDates() 
  },
  methods: {
    ...mapActions(['getDaysAction']),
    setDates() {
      this.dates = [moment(this.daysSelected[0]).format('YYYY-MM-DD'), moment(this.daysSelected[4]).format('YYYY-MM-DD')]
    },
    addDays() {
      let payload = moment(this.daysSelected[2]).add(5, 'days')
      this.getDaysAction(payload)
    },
    subtractDays() {
      let payload = moment(this.daysSelected[2]).subtract(5, 'days')
      this.getDaysAction(payload)
    },
    updateCalenderDates(){
      let payload = moment(this.dates[0]).add(2, 'days')
      this.getDaysAction(payload)
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