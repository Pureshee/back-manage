<template>
  <div>
    主页
    <sidebar />
    <mainContent />
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
<style></style>
