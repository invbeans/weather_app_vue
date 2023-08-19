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
    height: 3.5em;
    width: 10rem;
    min-width: fit-content;
    border: none;
    border-radius: 15px;
    padding: 1em 1.5rem;
}
</style>