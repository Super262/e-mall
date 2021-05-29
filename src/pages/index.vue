<template>
  <div id="app">
    <index-nav-header></index-nav-header>
    <router-view></router-view>
    <index-nav-footer></index-nav-footer>
  </div>
</template>

<script>
import IndexNavFooter from "../components/IndexNavFooter";
import IndexNavHeader from "../components/IndexNavHeader";

export default {
  name: "index",
  components: {IndexNavFooter, IndexNavHeader},
  mounted() {
    if (this.$cookie.get('userId')) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res);
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/reset";
@import "../assets/scss/config";
@import "../assets/scss/mixin";
@import "../assets/scss/base";
@import "../assets/scss/button";
</style>