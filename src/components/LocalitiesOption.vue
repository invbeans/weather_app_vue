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
    border: 1px solid gray;
    border-radius: 5px;
}

</style>