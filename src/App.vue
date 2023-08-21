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
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(244, 232, 210);
}


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
  height: 100%;
}

@media (max-width: 600px) and (orientation: portrait) {

  .app {
    font-size: 12px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
