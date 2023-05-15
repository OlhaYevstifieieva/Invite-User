<script>
  export default {
    name: 'Navigation',
    methods: {
      isActive(route) {
        return this.$route.path === route;
      },
    },
  };
</script>

<template>
  <div class="navigation-container">
    <div class="navigation">
      <router-link
        :to="{ path: '/step1' }"
        :class="{ active: isActive('/step1') }"
      >
        Main Info
      </router-link>
      <router-link
        :to="{ path: '/step2' }"
        :class="{ active: isActive('/step2') }"
      >
        Available Locations
      </router-link>
      <router-link
        :to="{ path: '/step3' }"
        :class="{ active: isActive('/step3') }"
      >
        Roles
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .navigation-container {
    max-width: 850px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-bottom: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .navigation {
    display: flex;
    align-items: center;
  }

  .navigation a {
    margin-right: 10px;
    padding: 10px;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #676F8F;
    border-radius: 5px;

    transition-property: background-color color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .navigation a.active {
    background-color: #00d1b2;
    color: white;
  }

  .navigation a:last-child {
    margin-right: 0;
  }

  .navigation a:hover {
    background-color: #f5f5f5;
    color: #00d1b2;
  }

</style>

