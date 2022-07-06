<template>
    <div>
        <div>
            <div class="nav-container-two">
                <div class="btn btn-left" @click="subtractDays">
                    <img src="../assets/left-arrow.svg" />
                </div>
                <div class="nav-days">
                    <div class="display-days" v-for="day in daysSelected" :key="day.value"
                        :class="{ 'text-color-to-red': checkToday(day) }">
                        {{ day.format("dddd M[/]D") }}
                    </div>
                </div>
                <div class="btn btn-right" @click="addDays">
                    <img src="../assets/left-arrow.svg" />
                </div>
            </div>
        </div>
        <div class="cards-week-container">
            <div class="cards-days-container" v-for="day in daysSelected"
                :key="day.value">
                <instagram-posts-card v-for="post in getPosts(day)" :key="post.value"
                    :imageUrl="post.image" :cardText="post.text" :cardTime="post.time" :cardDate="post.date" :post="post">
                </instagram-posts-card>
                <EmptyInstagramPostsCard v-for="i in maximumRows(day)" :key='i'></EmptyInstagramPostsCard>
            </div>
        </div>

    </div>
</template>

<script>
import jsonData from "./output.json"
import InstagramPostsCard from "./InstagramPostsCard.vue";
import EmptyInstagramPostsCard from "./EmptyInstagramPostsCard.vue";
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        InstagramPostsCard,
        EmptyInstagramPostsCard
    },
    data() {
        return {
            posts: jsonData,
        }
    },
    computed: {
        ...mapGetters(['daysSelected'])
    },
    methods: {
        ...mapActions(['getDaysAction']),
        addDays() {
            let payload = moment(this.daysSelected[2]).add(5, 'days')
            this.getDaysAction(payload)
        },
        subtractDays() {
            let payload = moment(this.daysSelected[2]).subtract(5, 'days')
            this.getDaysAction(payload)
        },
        getPosts(day) {
            return this.posts.filter(
                (item) => item.date == moment(day.format("YYYY-MM-DD")).format("YYYY-MM-DD")
            );
        },
        maximumRows(day){
            let rows=[]
            for(let day of this.daysSelected){
                rows.push(this.getPosts(day).length)
            }
            let maximumRow =  Math.max.apply(Math, rows)
            return maximumRow-this.getPosts(day).length
        },
        checkToday(day) {
            if (moment().format("YYYY-MM-DD") == moment(day).format("YYYY-MM-DD")) {
                return true;
            } else {
                return false;
            }
        }
    },
}
</script>


 <style lang="scss" scoped>
 .nav-container-two {
     display: flex;
     align-items: center;
     width: 104rem;
     height: 4.4rem;
     margin-bottom: 0.899rem;
     margin-left: 1.622rem;
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
     height: 76.703rem;
     display: grid;
     padding-right:1rem;
     margin-left: 2.943rem;
     margin-right: 2.312rem;
     grid-template-columns: repeat(5, 1fr);
     grid-row-gap: 0.601rem;
     grid-column-gap: 0.6rem;
     overflow-y: auto;
     overflow-x: hidden;
 }
 
 .cards-days-container {
     height: 25.568rem;
     display: grid;
     grid-row-gap: 0.601rem
 }
 
 .text-color-to-red {
     color: $red;
 }
 </style>