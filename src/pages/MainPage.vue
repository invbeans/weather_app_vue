<template>
    <div class="input-container">
        <shared-input :input-value="searchQuery" @update:input-value="setSearchQuery"></shared-input>
        <shared-button @click="searchLocation">Найти погоду</shared-button>
        <div class="weather-info">
            <localities-select v-if="foundLocalities.length !== 0" @change:item="checkWhat" :selectName="selectName" :elements="foundLocalities"></localities-select>
            <ShortWeatherComponent :fetchedWeather="localityWeather" v-if="localityWeather !== undefined"></ShortWeatherComponent>
            <p v-else>Погода подгружается...</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex';
import ShortWeatherComponent from '@/components/ShortWeatherComponent.vue'
import LocalitiesSelect from '@/components/LocalitiesSelect.vue';

export default {
    components: {
        ShortWeatherComponent, 
        LocalitiesSelect
    },
    data: () => ({
        selectName: "Выбор населенного пункта"
    }),
    methods: {
        ...mapMutations ({
            setSearchQuery: 'search/setSearchQuery',
            setLocalityWeather: 'search/setLocalityWeather',
            setFoundLocalities: 'search/setFoundLocalities',
            setChosenLocality: 'search/setChosenLocality',
        }),
        ...mapActions({
            searchWeatherByLatLong: 'search/searchWeatherByLatLong',
            searchLocation: 'search/searchLocation'
        }),
        checkWhat(value){
            this.setChosenLocality(value)
            this.searchWeatherByLatLong()
        }
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

<style scoped lang="scss"></style>