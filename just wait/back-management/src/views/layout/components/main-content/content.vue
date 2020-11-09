<template>
  <div class="content">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="handleTabsEdit"
      @tab-click="tabClick"
    >
      <el-tab-pane
        :key="item.index"
        v-for="item in editableTabs"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      // editableTabsValue: "2",
      // ]
    };
  },
  computed: {
    editableTabsValue: {
      get() {
        return this.$store.state.editableTabsValue;
      },
      set(v) {
        this.$store.dispatch("setTabValue", v);
        this.$router.push({ name: v });
      }
    },
    ...mapState(["editableTabs"])
  },
  methods: {
    handleTabsEdit(targetName) {
      this.$store.commit("delTabs", targetName);
    },
    tabClick(i) {
      this.$router.push({ name: i.name });
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  padding: 20px 20px 0 20px;
}
</style>
