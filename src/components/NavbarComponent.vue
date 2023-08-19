<template>
    <div class="navbar-container">
        <p>Погодное приложение</p>
    </div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
.navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    width: 100%;
    background-color: rgb(87, 160, 77);
    display: flex;
    align-items: center;
}

.navbar-container p {
    padding: 3em;
    color: white;
}
</style>