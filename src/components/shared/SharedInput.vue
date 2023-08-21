<template>
    <input type="text" placeholder="Введите текст..." :value="inputValue" @input="updateInputValue">
</template>

<script>
export default {
    name: 'shared-input',
    props: {
        inputValue: [String]
    },
    methods: {
        updateInputValue(event) {
            this.$emit('update:inputValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
input {
    height: 3.5em;
    width: 46rem;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}

@media (max-width: 600px) and (orientation: portrait){
    input {
        height: 3em;
        width: 15rem;
    }
}
</style>