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
<style lang="scss" scoped>
.main-content {
  box-sizing: border-box;
}
</style>
