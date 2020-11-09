export default {
  // 标签栏激活控制
  setTabValue(context, payload) {
    context.commit("changeTabsValue", payload);
  }
};
