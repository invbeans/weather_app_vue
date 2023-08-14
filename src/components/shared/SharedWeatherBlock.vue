<template>
    <div class="weather-container" :style="{backgroundImage: 'url(' + this.imageURL + ')'}">
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
    min-height: 30vh;
    max-width: 30vw;
    border-radius: 20px;
    padding: 10px 20px;
}
</style>