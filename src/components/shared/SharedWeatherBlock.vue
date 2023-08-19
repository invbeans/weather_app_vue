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
    height: 30vh;
    width: 100%;
    border-radius: 20px;
    padding: 20px 30px;
    box-shadow: inset 0.5em 0.5em 1em 0.2em rgba(80, 4, 40, 0.2);
}
</style>