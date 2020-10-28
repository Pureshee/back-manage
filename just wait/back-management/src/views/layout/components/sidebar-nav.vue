<template>
  <div>
    <h2>侧边菜单栏</h2>
    <ul>
      <li @click="go(1)">菜单1</li>
      <li @click="go(2)">菜单2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    go(i) {
      if (i === 1) {
        // let name = "Home";
        this.$router.push({ name: "Home" });
      }
      // this.$router.push()
    }
  }
};
</script>
<style></style>
