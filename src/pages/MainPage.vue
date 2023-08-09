<template>
    <div class="input-container">
        <shared-input :input-value="searchQuery" @update:input-value="setSearchQuery"></shared-input>
        <shared-button @click="searchWeather">Найти погоду</shared-button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex';
export default {
    methods: {
        ...mapMutations ({
            setSearchQuery: 'search/setSearchQuery'
        }),
        ...mapActions({
            searchWeather: 'search/searchWeather'
        })
    },
    computed: {
        ...mapState({
            searchQuery: state => state.search.searchQuery
        })
    }

}
</script>

<style scoped lang="scss"></style>