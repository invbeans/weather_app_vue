<template>
    <div class="weather-container" :style="{ backgroundImage: 'url(' + this.imageURL + ')' }">
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
    height: 30vh;
    width: 100%;
    border-radius: 20px;
    padding: 20px 30px;
    box-shadow: inset 0.5em 0.5em 1em 0.2em rgba(118, 6, 60, 0.2);
}
</style>