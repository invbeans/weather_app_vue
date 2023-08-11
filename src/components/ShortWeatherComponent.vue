<template>
    <div class="container">
        <p>Погода в пункте {{ fetchedWeather.name }}:</p>
        <div class="short-info">
            <img :src="fetchedWeather.icon" alt="weather icon" class="weather-icon">
        </div>
        <p>{{ fetchedWeather.temp_c }}</p>
    </div>
</template>

<script>
import CurrentWeather from '@/models/currentWeather';

export default {
    props: {
        fetchedWeather: [CurrentWeather, undefined]
    }
}
</script>

<style scoped lang="scss">
.weather-icon {
    max-width: 30vw;
}
</style>