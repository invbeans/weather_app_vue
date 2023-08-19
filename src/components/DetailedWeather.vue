<template>
    <div class="container">
        <p>Ветер: {{ fetchedWindMs }}  - направление: {{ fetchedWindDir }}</p>
        <p>Давление: {{ fetchedPressureMmRtSt }}</p>
        <p>Влажность: {{ fetchedHumidity }}</p>
        <p>Ощущается как: {{ fetchedFeelsLike }}</p>
    </div>
</template>

<script>
import CurrentWeather from '@/models/currentWeather';

export default {
    props: {
        fetchedWeather: [CurrentWeather, undefined]
    },
    computed: {
        fetchedWindMs() {
            return this.fetchedWeather.wind_ms.toFixed(2) + 'м/с'
        },
        fetchedPressureMmRtSt() {
            return this.fetchedWeather.pressure_mm_rt_st.toFixed(2) + ' мм. рт. ст.'
        },
        fetchedHumidity(){
            return this.fetchedWeather.humidity.toFixed(2) + '%'
        },
        fetchedFeelsLike() {
            return this.fetchedWeather.feelslike_c + '°C'
        },
        fetchedWindDir() {
            let dict = {N: 'С', S: 'Ю', E: 'В', W: 'З'}
            let windDir = '' 
            this.fetchedWeather.wind_dir.split('').forEach(e => {
                windDir += dict[e]
            })
            return windDir
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
    color: wheat;
}
</style>