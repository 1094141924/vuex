import router from "../router";

const mutations = {
    login(state, v) {
        state.userInfo = v;
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    member(state, v) {
        state.userStatus = v.userStatus;
        state.userLevel = v.userLevel;
    }
}
export default mutations;