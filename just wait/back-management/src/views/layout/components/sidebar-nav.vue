<template>
  <div class="sidebar">
    <el-menu
      background-color="#304156"
      text-color="#fff"
      :default-active="menuActive"
      active-text-color="#ffd04b"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">采购管理</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>
          <span slot="title">新建订单</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i>
          <span slot="title">采购列表</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-menu"></i>
          <span slot="title">采购分析</span>
        </el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">采购退货</span>
          </template>
          <el-menu-item index="2-4-1">
            <i class="el-icon-menu"></i>
            <span slot="title">退货列表</span>
          </el-menu-item>
          <el-menu-item index="2-4-2">
            <i class="el-icon-menu"></i>
            <span slot="title">退货分析</span>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">库存管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">职工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menuList: {
        "1": { name: "Home", title: "首页" },
        "2-1": { name: "order-add", title: "订单新增" },
        "2-2": { name: "order-list", title: "订单列表" },
        "2-3": { name: "order-analyse", title: "订单分析" },
        "2-4-1": { name: "cancel-list", title: "退货列表" },
        "2-4-2": { name: "cancel-analyse", title: "退货分析" },
        "3": { name: "stock-manage", title: "库存分析" },
        "4": { name: "persons-manage", title: "职工管理" }
      }
    };
  },
  methods: {
    // 菜单点击跳转
    handleSelect(idx) {
      let index = idx.toString();
      let toRoute = this.menuList[index];
      // 标签页处理
      let result = this.$store.state.editableTabs.some(
        tab => tab.index === idx
      );
      if (!result) {
        this.$store.commit("addTabs", {
          title: toRoute.title,
          index: index,
          name: toRoute.name
        });
        this.$router.push({ name: toRoute.name });
      } else {
        this.$store.dispatch("setTabValue", toRoute.name);
      }
    }
  },
  computed: {
    // 菜单栏折叠控制
    ...mapState({
      isCollapse: "isCollapse"
    }),
    // 标签栏切换，激活响应菜单栏
    menuActive() {
      return this.$store.getters.menuActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
</style>
