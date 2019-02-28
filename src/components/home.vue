<template>
  <div>
    <router-view></router-view>
    <div class="btn-style">
      <router-link :to="{name:'list'}">新闻列表</router-link>
      <router-link :to="{name:'add'}">个人中心</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.btn-style {
  bottom: 2px;
  position: fixed;
  left:30%;

}
</style>
