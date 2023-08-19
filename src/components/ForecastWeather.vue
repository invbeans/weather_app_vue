<template>
    <div class="container">
        <div class="one-day-block" v-for="day in updForecast" :key="day.date_epoch">
            <p>{{ day.date }}</p>
            <img :src="'https:' + day.day.condition.icon" alt="weather icon" class="weather-icon">
            <p>{{ day.day.avgtemp_c }}°C</p>
            <p>{{ day.day.condition.text }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        forecastWeather: [Array, undefined]
    },
    computed: {
        updForecast() {
            let updForecast = this.forecastWeather
            updForecast[0].date = 'Завтра'
            updForecast[1].date = 'Послезавтра'
            return updForecast
        }
    }
}
</script>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.one-day-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: wheat;
}

</style>