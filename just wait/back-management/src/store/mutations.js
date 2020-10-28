export default {
  loginIn(state, token) {
    state.userToken = token;
  },
  loginOut(state) {
    state.userToken = "";
  }
};
