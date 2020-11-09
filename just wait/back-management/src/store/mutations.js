export default {
  loginIn(state, token) {
    state.userToken = token;
  },
  loginOut(state) {
    state.userToken = "";
  },
  isCollapse(state) {
    state.isCollapse = !state.isCollapse;
  },
  // 面包屑列表
  setCrumb(state, list) {
    state.breadCrumb = list;
  },
  // 标签栏列表新增
  addTabs(state, item) {
    // console.log(item);
    state.editableTabs.push(item);
    state.editableTabsValue = item.name;
  },
  // 标签栏列表删除
  delTabs(state, targetName) {
    let tabs = state.editableTabs;
    let activeName = state.editableTabsValue;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    state.editableTabsValue = activeName;
    state.editableTabs = tabs.filter(tab => tab.name !== targetName);
  },
  // 标签栏激活控制
  changeTabsValue(state, value) {
    state.editableTabsValue = value;
  }
};
