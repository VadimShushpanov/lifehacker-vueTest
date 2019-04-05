import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
