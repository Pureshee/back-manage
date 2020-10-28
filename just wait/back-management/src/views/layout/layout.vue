<template>
  <div class="layout">
    <sidebar />
    <mainContent class="main-content" />
  </div>
</template>

<script>
import sidebar from "./components/sidebar-nav.vue";
import mainContent from "./components/main-content";

export default {
  name: "",
  components: {
    sidebar,
    mainContent
  }
};
</script>
<style>
.main-content {
  padding-left: 200px;
  box-sizing: border-box;
  width: 100%;
  background-color: green;
}
</style>
