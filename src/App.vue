<script>
  import Navigation from './components/Navigation.vue';

  export default {
    name: 'App',
    components: {
      Navigation, 
    },
  };
</script>

<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>
