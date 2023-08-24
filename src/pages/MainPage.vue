<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="input-container">
                <shared-input :input-value="searchQuery" @update:input-value="setSearchQuery"
                    @keyup.enter="searchLocation"></shared-input>
                <shared-button @click="searchLocation">Найти погоду</shared-button>
            </div>
            <div class="found-localities">
                <localities-select v-if="foundLocalities.length !== 0" @change:item="findByLatLong" :selectName="selectName"
                    :elements="foundLocalities"></localities-select>
            </div>
            <transition name="fade">
                <div class="weather-blocks" v-if="localityWeather !== undefined">
                    <shared-weather-block :imageURL='shortBlockBg'>
                        <short-weather :fetchedWeather="localityWeather">
                        </short-weather>
                    </shared-weather-block>
                    <shared-weather-block :imageURL='detailedBlockBg'>
                        <detailed-weather :fetchedWeather="localityWeather">
                        </detailed-weather>
                    </shared-weather-block>
                    <shared-weather-block :imageURL='forecastBlockBg' v-if="forecastWeather !== undefined">
                        <forecast-weather
                            :forecastWeather="forecastWeather.forecast.forecastday.slice(1)"></forecast-weather>
                    </shared-weather-block>
                    <shared-weather-block class="col-span" v-if="forecastWeather !== undefined" :imageURL='hoursBlockBg'>
                        <hour-weather :hourWeatherProp="forecastWeather.forecast.forecastday[0].hour"></hour-weather>
                    </shared-weather-block>
                </div>
                <p v-else>Выберите населенный пункт...</p>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ShortWeather from '@/components/ShortWeather.vue'
import DetailedWeather from '@/components/DetailedWeather.vue';
import LocalitiesSelect from '@/components/LocalitiesSelect.vue';
import HourWeather from '@/components/HourWeather.vue';
import ForecastWeather from '@/components/ForecastWeather.vue';

export default {
    components: {
        ShortWeather,
        DetailedWeather,
        LocalitiesSelect,
        HourWeather,
        ForecastWeather
    },
    data: () => ({
        selectName: "Выбор населенного пункта",
        shortBlockBg: require('../assets/cut_patchy_rain.png'),
        detailedBlockBg: require('../assets/snow_field_cut.png'),
        hoursBlockBg: require('../assets/flowers_cut.png'),
        forecastBlockBg: require('../assets/luggage_cut.png'),
    }),
    methods: {
        ...mapMutations({
            setSearchQuery: 'search/setSearchQuery',
            setLocalityWeather: 'search/setLocalityWeather',
            setFoundLocalities: 'search/setFoundLocalities',
            setChosenLocality: 'search/setChosenLocality',
            setForecastWeather: 'search/setForecastWeather'
        }),
        ...mapActions({
            searchWeatherByLatLong: 'search/searchWeatherByLatLong',
            searchLocation: 'search/searchLocation',
            searchForecast: 'search/searchForecast'
        }),
        findByLatLong(value) {
            this.setChosenLocality(value)
            this.searchWeatherByLatLong()
            this.searchForecast()
        },
    },
    computed: {
        ...mapState({
            searchQuery: state => state.search.searchQuery,
            localityWeather: state => state.search.localityWeather,
            foundLocalities: state => state.search.foundLocalities,
            forecastWeather: state => state.search.forecastWeather
        })
    }

}
</script>

<style scoped lang="scss">
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.content-wrapper {
    height: 100%;
    width: 90em;
    padding-left: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.found-localities {
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    width: 80%;
    display: flex;
    align-items: flex-start;
}

.input-container {
    width: 80%;
    display: flex;
    gap: 2em;
    align-items: flex-start;
}

.weather-blocks {
    height: auto;
    width: 80%;
    display: grid;
    padding-top: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
}

.col-span {
    grid-column: span 3;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 600px) and (orientation: portrait) {
    .content-wrapper {
        align-items: start;
        padding-left: 1em;
    }

    .weather-blocks {
        grid-template-columns: 1fr;
        column-gap: 1em;
        row-gap: 1em;
        width: 100%;
        padding-right: 1em;
    }

    .input-container {
        gap: 0.5em;
    }

    .col-span {
        grid-column: span 1;
    }

}


@media (max-height: 900px) and (orientation: landscape) {
    .content-wrapper {
        align-items: center;
        padding-left: 0;
    }
}
</style>