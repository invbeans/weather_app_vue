<template>
    <div class="container">
        <p>Погода в пункте {{ fetchedWeather.name }}:</p>
        <div class="short-info">
            <img :src="fetchedWeather.icon" alt="weather icon" class="weather-icon">
        </div>
        <p>{{ fetchedTemp }}</p>
        <p>{{ fetchedWeather.text }}</p>
        <p>{{ fetchedWeather.localtime }}</p>
    </div>
</template>

<script>
import CurrentWeather from '@/models/currentWeather';

export default {
    props: {
        fetchedWeather: [CurrentWeather, undefined]
    },
    computed: {
        fetchedTemp() {
            return this.fetchedWeather.temp_c + '°C'
        }
    }
}
</script>

<style scoped lang="scss">
.weather-icon {
    max-width: 20vw;
}
</style>