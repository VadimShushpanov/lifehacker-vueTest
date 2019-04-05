<template>
  <div class="articles">
    <ul >
      <ol v-for="article in articles" :key="article.id">
        <router-link :to="{ name: 'Article'}" target='_blank'  v-on:click.native="getArticleId"  :id="article.id">
          <div class="article" >
            <img class='circle' :src="article.cat_cover.sizes.mobile">
            <div class="article-name">{{ article.title.rendered}}</div>
          </div>
        </router-link>
      </ol>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Articles',
  mounted () {
    this.$store.dispatch('getArticles')
  },
  computed: mapState([
    'articles'
  ])
}
</script>

<style scoped>
.circle {
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  background: #808080;
  text-decoration: none;
}
a {
  text-decoration: none;
}
.article {
  display: flex;
  align-items: center;
}
ol {
  padding: 10px;
}
.article-name {
  margin-left: 10px;
}
.articles {
  width: auto;
  max-width: 800px;
}
</style>
