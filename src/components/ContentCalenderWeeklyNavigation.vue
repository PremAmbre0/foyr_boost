<template>
    <div class="container">
        <div class="divider"></div>
        <div class="nav-container">
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
        <div class="cards-week-container">
            <div class="cards-days-container" v-for="day in daysSelected" :key="day.value">
                <instagram-posts-card v-for="post in getPosts(day)" :key="post.value" :imageUrl="post.image"
                    :cardText="post.text" :cardTime="post.time" :cardDate="post.date" :post="post">
                </instagram-posts-card>
                <EmptyInstagramPostsCard v-for="i in maximumRows(day)" :key='i'></EmptyInstagramPostsCard>
            </div>
        </div>
        <div v-if="cardsContainerIsEmpty" class="empty-container-wrapper">
            <div class="empty-container">
                <img src="../assets/sitRelax.svg" class="empty-container-img">
                <div class="empty-container-header">"Good things take time"</div>
                <div class="empty-container-text">Sit back and relax while we update your content clender for you</div>
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
            cardsContainerIsEmpty: false,
        }
    },
    computed: {
        ...mapGetters(['daysSelected'])
    },
    methods: {
        ...mapActions(['setDaysAction']),
        addDays() {
            let payload = moment(this.daysSelected[2]).add(5, 'days')
            this.setDaysAction(payload)
        },
        subtractDays() {
            let payload = moment(this.daysSelected[2]).subtract(5, 'days')
            this.setDaysAction(payload)
        },
        getPosts(day) {
            return this.posts.filter(
                (item) => item.date == moment(day.format("YYYY-MM-DD")).format("YYYY-MM-DD")
            );
        },
        maximumRows(day) {
            let rows = []
            for (let day of this.daysSelected) {
                rows.push(this.getPosts(day).length)
            }
            let maximumRow = Math.max.apply(Math, rows)
            maximumRow ? this.cardsContainerIsEmpty = false : this.cardsContainerIsEmpty = true
            if (maximumRow == 0 || maximumRow <3) {
                return 3
            }
            else{
                return maximumRow - this.getPosts(day).length
            }
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
 .container {
     position: relative;
 }
 
 .divider {
     left: 1.962rem;
     position: absolute;
     height: 0;
     width: 104.0rem;
     border: 0.1rem solid $light-grey-two;
     background-color: $light-grey-two;
 }
 
 .nav-container {
     display: flex;
     align-items: center;
     width: 104rem;
     height: 4.4rem;
     margin-top: 2.703rem;
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
     box-shadow: 0rem 0.689023rem 2.75609rem rgba(0, 0, 0, 0.25);
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
     padding-right: 1rem;
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
 
 .empty-container-wrapper {
     position: absolute;
     top: 17rem;
     left: 28rem
 }
 
 .empty-container {
     position: relative;
     width: 56.195rem;
     height: 37.373rem;
     background: $white;
     opacity: 0.9;
     border: 0.7rem solid $light-peach-three;
     border-radius: 0.6rem;
     ;
 
     &-img {
         position: absolute;
         width: 36.662rem;
         height: 22.075rem;
         top: 1.189rem;
         left: 10.531rem;
     }
 
     &-header {
         position: absolute;
         width: 21.8rem;
         height: 2.8rem;
         font-style: italic;
         font-weight: 600;
         font-size: 1.8rem;
         line-height: 2.8rem;
         letter-spacing: -0.01em;
         color: #232121;
         left: 17.347rem;
         top: 24.556rem;
     }
 
     &-text {
         position: absolute;
         width: 41.933rem;
         height: 4.8rem;
         font-style: normal;
         font-weight: 500;
         font-size: 1.6rem;
         line-height: 2.4rem;
         text-align: center;
         letter-spacing: -0.01em;
         color: #3A393A;
         left: 7.131rem;
         top: 28.875rem;
 
     }
 }
 </style>