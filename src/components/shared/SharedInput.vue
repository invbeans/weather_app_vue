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
        updateInputValue(event){
            this.$emit('update:inputValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss"></style>