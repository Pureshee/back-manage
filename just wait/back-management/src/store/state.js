export default {
  get userToken() {
    return localStorage.getItem("token");
  },
  set userToken(value) {
    return localStorage.setItem("token", value);
  },
  isCollapse: false, // 菜单栏折叠控制
  breadCrumb: [], // 面包屑列表
  editableTabs: [
    {
      title: "首页",
      index: "1",
      name: "Home"
    }
  ], // 标签栏列表
  editableTabsValue: "Home" //当前激活标签栏
};
