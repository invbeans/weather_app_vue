<template>
    <div class="weather-container" :style="{ background: 'linear-gradient(rgba(68, 57, 42, 0.6), rgba(68, 57, 42, 0.6)), top / cover url(' + this.imageURL + ')' }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'shared-weather-block',
    props: {
        imageURL: [String]
    }

}
</script>

<style scoped lang="scss">
.weather-container {
    height: 14rem;
    width: 100%;
    min-width: 15em;
    border-radius: 20px;
    padding: 1.2em 1.8rem;
    box-shadow: inset 0.5em 0.5em 2em 1.5em rgba(53, 51, 43, 0.331);
}
</style>