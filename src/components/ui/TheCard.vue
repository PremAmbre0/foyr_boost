<template>
    <div class="card">
        <div class="card-status-badge" :style="{'background':`${isPosted ? '#7BC82F' : '#FFD328'}`}"></div>
        <div class="card-status-text">{{isPosted ? "Posted" : "Upcoming"}}</div>
        <div class="card-image" :style="{'background-image':`url(${imageUrl})`}"></div>
        <div class="card-text">{{cardText}}</div>
        <div class="card-time">{{cardTime}}</div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props:{
        imageUrl:{
            type: String,
        },
        cardText:{
            type: String,
        },
        cardTime:{
            type: String,
        },
        cardDate:{
            type: String,
        }
        }
    ,
    computed:{
        now(){
            return moment()
        },
        isPosted(){
            let time = moment(`${this.cardDate} ${this.cardTime}`)
            return this.now>time
        },
    },
}

</script>


<style lang="scss" scoped>
.card {
    height: 25.568rem;
    width: 20.263rem;
    border: 0.1rem solid $light-grey;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;


    &-status-badge {
        position: absolute;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        left: 1.6rem;
        top: 1.467rem;
    }

    &-status-text {
        position: absolute;
        width: 3.8rem;
        height: 1.4rem;
        left: 3.033rem;
        top: 1.267rem;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.4rem;
        text-transform: uppercase;
        color:$white;
    }

    &-image {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 9.88%, rgba(0, 0, 0, 0) 100%), $light-peach-two;
        // background-image: url("https://picsum.photos/seed/picsum/200/300");
        background-size: 19rem 19rem;
        width: 19rem;
        height: 19rem;
        border-radius: 0.4rem;
        margin-top: 0.639rem;
    }


    &-text {
        width: 18.794rem;
        height: 1.162rem;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.1rem;
        color: $light-black;
        margin-top: 0.897rem;
    }

    &-time {
        width: 6.4rem;
        height: 1.1rem;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.1rem;
        color: $light-black;
        margin-top: 1.373rem;
        margin-left:0.838rem;
        align-self:flex-start;
    }
}
</style>