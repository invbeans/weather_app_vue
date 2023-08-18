<template>
    <div class="container">
        <p>Почасовой прогноз:</p>
        <div class="weather-block">
            <button @click="leftBtnClick">
                ◃
            </button>
            <div class="hours-weather" v-for="hour in hoursArray" :key="hour.time_epoch">
                <p>{{ hour.time.split(' ')[1] }}</p>
                <img :src="'https:' + hour.condition.icon" alt="weather icon" class="weather-icon">
            </div>
            <button @click="rightBtnClick">
                ▹
            </button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    props: {
        hourWeather: [Array, undefined]
    },
    methods: {
        ...mapMutations({
            setHourWeather: 'slide/setHourWeather',
            setStartHour: 'slide/setStartHour'
        }),
        ...mapActions({
            leftBtnClick: 'slide/leftBtnClick',
            rightBtnClick: 'slide/rightBtnClick'
        })
    },
    computed: {
        ...mapState({
            hourWeather: state => state.slide.hourWeather,
            startHour: state => state.slide.startHour
        }),
        ...mapGetters({
            hoursArray: 'slide/hoursArray'
        })
    },
    mounted() {
        this.setHourWeather(this.hourWeather)
    }
}
</script>

<style scoped lang="scss">
.weather-block {
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

button {
    background-color: rgb(99, 218, 214);
    border-radius: 10px;
    border: none;
    width: 3vw;
    height: 4vh;
}
</style>