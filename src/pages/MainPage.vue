<template>
    <div class="wrapper">
        <div class="input-container">
            <shared-input :input-value="searchQuery" @update:input-value="setSearchQuery" @keyup.enter="searchLocation"></shared-input>
            <shared-button @click="searchLocation">Найти погоду</shared-button>
        </div>
        <div class="found-localities">
            <localities-select v-if="foundLocalities.length !== 0" @change:item="checkWhat" :selectName="selectName"
                :elements="foundLocalities"></localities-select>
        </div>
        <div class="weather-blocks" v-if="localityWeather !== undefined">
            <shared-weather-block :imageURL='shortBlockBg'>
                <short-weather :fetchedWeather="localityWeather">
                </short-weather>
            </shared-weather-block>
            <shared-weather-block :imageURL='detailedBlockBg'>
                <detailed-weather :fetchedWeather="localityWeather">
                </detailed-weather>
            </shared-weather-block>
        </div>
        <p v-else>Погода подгружается...</p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ShortWeather from '@/components/ShortWeather.vue'
import DetailedWeather from '@/components/DetailedWeather.vue';
import LocalitiesSelect from '@/components/LocalitiesSelect.vue';

export default {
    components: {
        ShortWeather,
        DetailedWeather,
        LocalitiesSelect
    },
    data: () => ({
        selectName: "Выбор населенного пункта",
        listInd: [1, 2],
        items: [
            { id: 0, title: 'audi', categoryId: 0 },
            { id: 1, title: 'bmw', categoryId: 0 },
            { id: 2, title: 'cat', categoryId: 1 }
        ],
        categories: [
            { id: 0, title: 'Cars' },
            { id: 1, title: 'Animals' }
        ],
        shortBlockBg: 'https://i.pinimg.com/1200x/06/ba/d9/06bad9fbdbabf49d9cf6c95a2715d1ed.jpg',
        detailedBlockBg: 'https://png.pngtree.com/background/20211215/original/pngtree-modern-abstract-elegant-colorful-color-background-picture-image_1453648.jpg'
    }),
    methods: {
        ...mapMutations({
            setSearchQuery: 'search/setSearchQuery',
            setLocalityWeather: 'search/setLocalityWeather',
            setFoundLocalities: 'search/setFoundLocalities',
            setChosenLocality: 'search/setChosenLocality',
        }),
        ...mapActions({
            searchWeatherByLatLong: 'search/searchWeatherByLatLong',
            searchLocation: 'search/searchLocation'
        }),
        checkWhat(value) {
            this.setChosenLocality(value)
            this.searchWeatherByLatLong()
        },
    },
    computed: {
        ...mapState({
            searchQuery: state => state.search.searchQuery,
            localityWeather: state => state.search.localityWeather,
            foundLocalities: state => state.search.foundLocalities
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
    width: 100%;
    align-items: center;
    display: flex;
}
.input-container {
    width: 100%;
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
}
</style>