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

@media (max-width: 600px) and (orientation: portrait){
    .button {
        height: 3em;
        width: 4em;
        padding: 0.5em 0.7em;
    }
}

@media (max-height: 900px) and (orientation: landscape) {
    .button {
        height: 3.5em;
        width: 4em;
        padding: 0.5em 1em;
    }
}

@media (max-width: 600px), (max-height: 600px){
    .button {
        font-size: 12px;
    }
}
</style>