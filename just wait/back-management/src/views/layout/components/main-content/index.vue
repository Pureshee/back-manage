<template>
  <div class="main-content" :class="{ 'main-collapse': isCollapse }">
    <topbar />
    <contents />
  </div>
</template>

<script>
import contents from "./content";
import topbar from "./top-bar";
import { mapState } from "vuex";

export default {
  name: "",
  components: {
    contents,
    topbar
  },
  computed: {
    ...mapState(["isCollapse"])
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  margin-left: 200px;
  transition: 0.4s;
}
.main-collapse {
  margin-left: 64px;
}
</style>
