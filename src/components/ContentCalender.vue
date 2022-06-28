<template>
    <div class="container">
        <div class="nav">
            <date-picker></date-picker>
            <div class="nav-toggle">
                <button class="nav-toggle-monthly">Monthly</button>
                <button class="nav-toggle-weekly">Weekly</button>
            </div>
            <div class="nav-container">
                <div class="btn btn-left" @click="dayShifter(start)"><img src="../assets/Stroke.svg"></div>
                <div class="nav-days">
                    <div class="display-days" v-for="day in days" :key="day.value" :class="{'text-color-to-red':checkToday(day)}" @click="dayShifter(day)">{{ day.format('dddd M[/]D')}}</div>
                </div>
                <div class="btn btn-right" @click="dayShifter(end)"><img src="../assets/Stroke.svg"></div>
            </div>
        </div>
        <div class="cards-container">
            <the-card v-for="post in todayPost" :key="todayPost.indexOf(post)" :imageUrl="post.image" :cardText="post.text"
                :cardTime="post.time" :cardDate="post.date">
            </the-card>
        </div>
    </div>
</template>


<script>
import DatePicker from "./DatePicker.vue";
import TheCard from "./ui/TheCard.vue";
import jsonData from "./output.json";
import moment from 'moment';
export default {
    components: {
        TheCard,
        DatePicker
    },
    data() {
        return {
            posts: jsonData,
            days: [],
            today: moment(),
            isPosted:false,
        }
    },
    computed: {
        start(){
            return moment(this.today).subtract(2, 'days')
        },
        end(){
            return moment(this.today).add(2, 'days')
        },
        todayPost() {
            return this.posts.filter((item) => item.date == moment(this.today).format('YYYY-MM-DD'))
        }
    },
    mounted() {
        this.getDays(this.start, this.end);
    },
    methods: {
        checkToday(day){
            if (moment(this.today).isSame(moment(day))){
                return true;
            }
            else{
                return false;
            }
        },
        dayShifter(day){
            this.today = day;
            this.days=[]
            this.getDays(this.start, this.end)
        },
        getDays(startDate, endDate) {
            while (startDate <= endDate) {
                this.days.push(startDate)
                startDate = startDate.clone().add(1, 'days')
            }
        },
    },
}

</script>


<style lang="scss" scoped>
.container {
    margin-left: 20rem;
    height: 102.793rem;
    width: 108.412rem;
}

.nav-container {
    display: flex;
    align-items: center;
    width: 104rem;
    height: 4.4rem;
    margin-bottom: 0.899rem;

}

.nav-days {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87.188em;
    height: 4.4rem;
}

.display-days {
    height: 2.4rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    color: #C4C4C4;
}

.btn{
    height: 3.583rem;
    width: 3.583rem;
    box-shadow: 0px 0.689023px 2.75609px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &-right{
        margin-left: 4.806rem;
        transform: rotate(180deg);
    }
    &-left{
        margin-right: 4.806rem;
    }
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 0.601rem;
    grid-column-gap:1.231rem ;
}
.text-color-to-red{
    color:$red
}
</style>