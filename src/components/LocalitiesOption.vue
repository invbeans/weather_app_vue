<template>
    <option :value="item">{{ item.name }} - {{ item.country }}, {{ item.region }}</option>
</template>

<script>
export default {
    name: 'localities-option',
    props: {
        item: [Object]
    }
}
</script>

<style scoped lang="scss"></style>