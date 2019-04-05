<template>
  <div class="article">
    <div class="header">
      <router-link :to="{ name: 'Articles'}"><div class="circle">&larr;</div></router-link>
    </div>
    <div v-for="article in articles" :key="article.id">
      <div v-if="articleId == article.id ">
        <h1 >{{ article.title.rendered}}</h1>
        <div class='content' v-html="article.content.rendered"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Article',
  articleId: '',
  mounted () {
    this.$store.dispatch('getArticles')
    if (localStorage.articleId) {
      this.articleId = localStorage.articleId
    }
  },
  computed: mapState([
    'articles'
  ])
}
</script>

<style scoped>
.header {
  font-weight: normal;
  padding: 20px;
  background-color: darkslategrey;
  color: #fff;
}
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  line-height: 70%;
  text-align: center;
  background: #000;
  text-decoration: none
}
@-moz-document url-prefix() {
 .circle {line-height: 50px !important}
}
a {
  text-decoration: none;
}
.content {
  margin-bottom: 50px;
}
</style>
