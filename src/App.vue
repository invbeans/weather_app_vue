<template>
  <NavbarComponent></NavbarComponent>
  <div class="app">
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

.app {
  margin-top: 4rem;
  padding: 20px;
}
</style>
