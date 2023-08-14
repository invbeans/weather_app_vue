<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'shared-button'
}
</script>

<style scoped lang="scss">
button {
    height: 5vh;
    width: 10vw;
    min-width: fit-content;
    border: none;
    border-radius: 15px;
    padding: 10px;
}
</style>