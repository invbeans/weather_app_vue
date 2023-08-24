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

@media (max-height: 600px) and (orientation: landscape) {
  .app {
    font-size: 12px;
    padding-left: 0;
    padding-right: 0;
  }
}

.temp {
    border: none;
    background: none;
    width: fit-content;
    transition: all 0.5s;
    text-align: center;
    cursor: pointer;
    color: wheat;
    font-size: 1em;
}

.temp span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.temp span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.temp:hover span {
    padding-right: 15px;
}

.temp:hover span:after {
    opacity: 1;
    right: 0;
}
</style>
