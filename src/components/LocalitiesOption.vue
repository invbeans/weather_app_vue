<template>
    <option :value="item">{{ item.name }} - {{ item.country }}, {{ item.region }}</option>
</template>

<script>
export default {
    props: {
        item: [Object]
    }
}
</script>

<style scoped lang="scss">
optgroup {
    height: 5vh;
    width: 50vw;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}

</style>