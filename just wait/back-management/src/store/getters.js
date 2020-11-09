export default {
  // 标签栏切换，激活响应菜单栏
  menuActive(state) {
    let result = state.editableTabs.filter(item => {
      if (item.name === state.editableTabsValue) {
        return item.index;
      }
    });
    return result[0].index;
  }
};
