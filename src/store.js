import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setArticle (state, article) {
      const art = {}
      art.title = article.title
      art.content = article.content
      state.list.push(art)
    }
  },
  actions: {

  }
})
