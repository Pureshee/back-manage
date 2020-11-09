<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login" replace>Login</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }
}
html,
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
</style>
