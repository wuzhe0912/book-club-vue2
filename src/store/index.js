import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpeg';

export default new Vuex.Store({
  // 存放狀態
  state: {
    count: 0,
    count2: 0,
    todos: [
      { done: true, name: '第一項' },
      { done: true, name: '第二項' },
      { done: false, name: '第三項' },
      { done: false, name: '第四項' },
      { done: true, name: '第五項' },
    ],
    loading: false,
    dogImage: '',
  },
  // 變更狀態(僅能執行同步操作)
  mutations: {
    addCount(state, payload) {
      state.count += payload;
    },
    addCount2(state, payload) {
      state.count2 += payload;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setDogImage(state, image) {
      state.dogImage = image;
    },
  },
  // 送出指令(可執行非同步操作，如呼叫 api)
  actions: {
    // context 也可以改寫為解構形式
    fetchDogs({ commit, dispatch }) {
      commit('setLoading', true);
      fetch(`${url}`).then((res) => {
        commit('setDogImage', res.url);
        commit('setLoading', false);
        console.log(1);
        dispatch('fetchCat');
      });
    },
    fetchCat() {
      console.log(2, 'cat');
    },
  },
  // 取得狀態(可以理解為在 store 中的 computed)
  getters: {
    filterDone(state) {
      let arr = state.todos.filter((node) => {
        return node.done;
      });
      return arr.length;
    },
    filterDo(state, getters) {
      return state.todos.length - getters.filterDone;
    },
  },
  // 切分模組
  modules: {},
});
