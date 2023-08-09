<template>
  <div class="app">
    <NavbarComponent></NavbarComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>

</style>
