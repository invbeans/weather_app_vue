<template>
    <div class="wrapper">
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
                <shared-weather-block class="col-span" v-if="forecastWeather !== undefined" :imageURL='forecastBlockBg'>
                    <hour-weather :hourWeather="forecastWeather.forecast.forecastday[0].hour"></hour-weather>
                </shared-weather-block>
            </div>
            <p v-else>Выберите населенный пункт...</p>
        </transition>
        
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ShortWeather from '@/components/ShortWeather.vue'
import DetailedWeather from '@/components/DetailedWeather.vue';
import LocalitiesSelect from '@/components/LocalitiesSelect.vue';
import HourWeather from '@/components/HourWeather.vue';

export default {
    components: {
        ShortWeather,
        DetailedWeather,
        LocalitiesSelect,
        HourWeather
    },
    data: () => ({
        selectName: "Выбор населенного пункта",
        shortBlockBg: 'https://i.pinimg.com/1200x/06/ba/d9/06bad9fbdbabf49d9cf6c95a2715d1ed.jpg',
        detailedBlockBg: 'https://png.pngtree.com/background/20211215/original/pngtree-modern-abstract-elegant-colorful-color-background-picture-image_1453648.jpg',
        forecastBlockBg: 'https://png.pngtree.com/background/20210709/original/pngtree-wave-point-pink-shading-banner-picture-image_912886.jpg'
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
    flex-direction: column;
    align-items: center;
}

.found-localities {
    height: 10vh;
    width: 80%;
    align-items: center;
    display: flex;
}

.input-container {
    width: 80%;
    display: flex;
    justify-items: baseline;
    gap: 2vw;
    align-items: flex-start;
}

.weather-blocks {
    height: auto;
    width: 80%;
    display: grid;
    padding-top: 2vh;
    grid-template-columns: 1fr 1fr;
    column-gap: 2vw;
    row-gap: 3vh;
}

.col-span {
    grid-column: span 2;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}</style>