<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/"></a>
      </div>
      <div class="title">
        <h2>{{ this.title }}<span>{{ this.tips }}</span></h2>
      </div>
      <div class="username">
        <a href="javascript:">{{ this.username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  props: {
    title: String,
    tips: String
  },
  computed: {
    username() {
      return this.$store.state.userName;
    },
    cartCount() {
      return this.$store.state.cartCount;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.order-header {
  padding: 30px 0;
  border-bottom: 2px solid $colorA;

  .header-logo {
    float: left;
  }

  .title .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }

  .title {
    float: left;
    margin-left: 54px;

    h2 {
      font-size: $fontC;
      color: $colorB;
    }

    span {
      font-size: $fontJ;
      margin-left: 17px;
      color: $colorD;
      font-weight: normal;
    }
  }

  .username {
    float: right;

    a {
      color: $colorC;
      font-size: $fontI;
    }
  }
}
</style>