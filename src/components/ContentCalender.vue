<template>
  <div class="container">
    <div class="nav">


      <div class="nav-container-one">
        <date-picker @leftButtonEvent="addFiveDays()"
          @rightButtonEvent="subtractFiveDays()" @updateDates="updateCalenderDates" :days="days"></date-picker>
        <div class="nav-toggle">
          <button class="nav-toggle-monthly">Monthly</button>
          <button class="nav-toggle-weekly">Weekly</button>
        </div>
        <div class="nav-today" @click="toToday()">Today</div>
      </div>


      <div class="nav-container-two">
        <div class="btn btn-left" @click="subtractFiveDays()">
          <img src="../assets/left-arrow.svg" />
        </div>
        <div class="nav-days">
          <div class="display-days" v-for="day in days" :key="day.value"
            :class="{'text-color-to-red': checkToday(day)}" @click="showPosts(day)">
            {{ day.format("dddd M[/]D") }}
          </div>
        </div>
        <div class="btn btn-right" @click="addFiveDays()">
          <img src="../assets/left-arrow.svg" />
        </div>
      </div>
    </div>


    <div class="cards-week-container">
      <div class="cards-days-container" v-for="postsOfTheSelectedDays in days" :key="postsOfTheSelectedDays.value">
      <the-card v-for="post in getPosts(postsOfTheSelectedDays)" :key="post.value" :imageUrl="post.image" :cardText="post.text"
        :cardTime="post.time" :cardDate="post.date">
      </the-card>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "./DatePicker.vue";
import TheCard from "./ui/TheCard.vue";
import jsonData from "./output.json";
import moment from "moment";
export default {
  components: {
    TheCard,
    DatePicker,
  },
  data() {
    return {
      posts: jsonData,
      days: [],
      postsOfTheday:[],
      day: moment(),
    };
  },
  beforeMount() {
    this.getDays(this.day);
  },
  methods: {
    start(day) {
      return moment(day).subtract(2, "days");
    },
    end(day) {
      return moment(day).add(2, "days");
    },
    checkToday(day) {
      if (moment().format("YYYY-MM-DD") == moment(day).format("YYYY-MM-DD")) {
        return true;
      } else {
        return false;
      }
    },
    getPosts(day) {
      return this.posts.filter(
        (item) => item.date == moment(day.format("YYYY-MM-DD")).format("YYYY-MM-DD")
      );
    },
    showPosts(day) {
      this.day = day;
    },
    getDays(day) {
      let startDate = this.start(day)
      let endDate = this.end(day)
      this.days = []
      while (startDate <= endDate) {
        this.days.push(startDate);
        startDate = startDate.clone().add(1, "days");
      }
    },
    addFiveDays() {
      this.getDays(this.days[2].add(5,"days"));
      this.showPosts(this.days[2]);
    },
    subtractFiveDays() {
      this.getDays(this.days[2].subtract(5, "days"))
      this.showPosts(this.days[2]);
    },
    toToday(){
      this.day = moment()
      this.getDays(moment())
      this.showPosts(moment())
    },
    updateCalenderDates(date) {
      let payload = moment(date).add(2, "days")
      this.getDays(payload)
      this.showPosts(moment(payload))
    }
  },
};
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

.nav-container-two {
  display: flex;
  align-items: center;
  width: 104rem;
  height: 4.4rem;
  margin-bottom: 0.899rem;
  margin-left:1.622rem;
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

.nav-days {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87.188em;
  height: 4.4rem;
  cursor: pointer;
}


.display-days {
  height: 2.4rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #c4c4c4;
}

.btn {
  height: 3.583rem;
  width: 3.583rem;
  box-shadow: 0px 0.689023px 2.75609px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &-right {
    margin-left: 4.806rem;
    transform: rotate(180deg);
  }

  &-left {
    margin-right: 4.806rem;
  }
}

.cards-week-container {
  display: grid;
  margin-left: 2.943rem;
  margin-right: 2.312rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 0.601rem;
  grid-column-gap: 0.6rem;
}
.cards-days-container{
  height:auto;
  display: grid;
  grid-row-gap:0.601rem
}

.text-color-to-red {
  color: $red;
}
</style>
