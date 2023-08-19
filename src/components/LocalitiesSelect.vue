<template>
    <select @change="changeOption" v-model="selected">
        <option disabled value="">{{ selectName }}</option>
        <localities-option v-for="option in elements" :item="option" :key="option.id"></localities-option>
    </select>
</template>

<script>
import LocalitiesOption from './LocalitiesOption.vue';
export default {
    components: {
        LocalitiesOption
    },
    props: {
        selectName: [String],
        elements: [Array]
    },
    data: () => ({
        selected: ''
    }),
    methods: {
        changeOption(){
            this.$emit('change:item', this.selected)
        }
    }
    
}
</script>

<style scoped lang="scss">
select {
    height: 3.5em;
    width: 46rem;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}

option {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}
</style>