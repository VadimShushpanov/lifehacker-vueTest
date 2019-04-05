<template>
  <div class="article">
    <div class="header">
      <router-link :to="{ name: 'Articles'}"><div class="circle">&larr;</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article'
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
  line-height: 50px;
  text-align: center;
  background: #000;
  text-decoration: none
}
a {
  text-decoration: none;
}
</style>
