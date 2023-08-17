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

export default {
    props: {
        hourWeather: [Array, undefined]
    },
    data: () => ({
        startHour: 0
    }),
    methods: {
        leftBtnClick() {
            this.startHour = (this.startHour <= 0) ? 0 : this.startHour - 1
        },
        rightBtnClick() {
            this.startHour = (this.startHour >= 13) ? 13 : this.startHour + 1
        }
    },
    computed: {
        hoursArray () {
            let sliceEnd = (this.startHour < 14) ? this.startHour + 11 : 24
            return this.hourWeather.slice(this.startHour, sliceEnd)
        }
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