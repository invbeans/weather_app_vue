<template>
    <div class="container">
        <p>Погода в пункте {{ fetchedWeather.name }}:</p>
        <div class="short-info">
            <img :src="fetchedWeather.icon" alt="weather icon" class="weather-icon">
        </div>
        <button class="temp" @click="tempClick"><span>{{ fetchedTemp }}</span></button>
        <p>{{ fetchedWeather.text }}</p>
        <p>{{ fetchedWeather.localtime }}</p>
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
        fetchedTemp() {
            if (this.isCelsius) return this.fetchedWeather.temp_c + '°C'
            else return this.fetchedWeather.temp_f + '°F'
        }
    }
}
</script>

<style scoped lang="scss">
.weather-icon {
    max-width: 20vw;
}

.container {
    display: flex;
    flex-direction: column;
    row-gap: 0.3em;
    color: wheat;
}
</style>