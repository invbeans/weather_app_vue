<template>
    <div class="container">
        <p>{{ fetchedWeather.wind_ms }} {{ fetchedWeather.wind_dir }}</p>
        <p>{{ fetchedWeather.pressure_mm_rt_st }}</p>
        <p>{{ fetchedWeather.humidity }}</p>
        <p>{{ fetchedWeather.feelslike_c }}</p>
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
</style>