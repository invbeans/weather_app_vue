<template>
    <div class="container">
        <p>Ветер: {{ fetchedWindMs }} - направление: {{ fetchedWindDir }}</p>
        <p>Давление: {{ fetchedPressureMmRtSt }}</p>
        <p>Влажность: {{ fetchedHumidity }}</p>
        <div>
            <p>Ощущается как:</p><button class="temp" @click="tempClick"><span> {{ fetchedFeelsLike }}</span></button>
        </div>
    </div>
</template>

<script>
import CurrentWeather from '@/models/currentWeather';
import tempMixin from '@/mixin/TempMixin'

export default {
    mixins: [tempMixin],
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
        fetchedHumidity() {
            return this.fetchedWeather.humidity.toFixed(2) + '%'
        },
        fetchedFeelsLike() {
            if (this.isCelsius) return this.fetchedWeather.feelslike_c + '°C'
            else return this.fetchedWeather.feelslike_f + '°F'
        },
        fetchedWindDir() {
            let dict = { N: 'С', S: 'Ю', E: 'В', W: 'З' }
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
    row-gap: 1.2em;
    color: wheat;
}
</style>