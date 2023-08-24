<template>
    <div class="container">
        <div class="one-day-block" v-for="day in updForecast" :key="day.date_epoch">
            <p>{{ day.date }}</p>
            <img :src="'https:' + day.day.condition.icon" alt="weather icon" class="weather-icon">
            <button class="temp" @click="tempClick(day)"><span>{{ avgTemp(day) }}</span></button>
            <p>{{ day.day.condition.text }}</p>
        </div>
    </div>
</template>

<script>
import tempMixin from '@/mixin/TempMixin'

export default {
    mixins: [tempMixin],
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
    },
    methods: {
        avgTemp(day) {
            if (this.isCelsius) return day.day.avgtemp_c + '°C'
            else return day.day.avgtemp_f + '°F'
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