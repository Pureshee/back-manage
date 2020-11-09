<template>
  <div class="top-bar">
    <span class="change-button">
      <img
        :class="{ 'img-active': isCollapse }"
        @click="collapse"
        src="../../../../assets/qiehuan.png"
        alt=""
      />
    </span>
    <el-breadcrumb class="bread-crumb" separator="/">
      <template v-for="(item, index) in breadCrumb">
        <el-breadcrumb-item
          :key="index"
          :to="{ name: item.name }"
          v-if="item.name != 'home' && item.meta.name != '首页'"
        >
          {{ item.meta.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <div class="setting">
      <el-avatar
        class="touxiang"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      >
      </el-avatar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "",
  methods: {
    collapse() {
      this.$store.commit("isCollapse");
    }
  },
  computed: {
    ...mapState(["isCollapse", "breadCrumb"])
  }
};
</script>
<style lang="scss" scoped>
.top-bar {
  height: 50px;
  border-bottom: 1px solid #f5f5f5;
  .change-button {
    float: left;
    padding-left: 12px;
    padding-top: 15px;
    transition: 0.4s;
    img {
      height: 20px;
      width: 20px;
    }
    .img-active {
      transform: rotateZ(90deg);
    }
  }
  .bread-crumb {
    float: left;
    margin-left: 24px;
    line-height: 50px;
  }
  .setting {
    float: right;
    height: 50px;
    .touxiang {
      height: 30px;
      width: 30px;
      margin-right: 30px;
      margin-top: 8px;
    }
  }
}
</style>
