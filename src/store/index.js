import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    articles: [],
    articleId: ''
  },
  actions: {
    getArticles ({ commit }) {
      axios.get('https://lifehacker.ru/api/wp/v2/posts')
        .then(articles => {
          commit('SET_ARTICLES', articles.data)
        })
    }
  },
  mutations: {
    SET_ARTICLES (state, articles) {
      state.articles = articles
    }
  }
})
