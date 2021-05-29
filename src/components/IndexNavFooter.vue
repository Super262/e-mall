<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../public/imgs/logo-footer.png" alt="E-Mall">
      <p>E-Mall 商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/Super262" target="_blank">Fengwei Zhang 的主页</a>
      <span>|</span>
      <a href="https://www.mi.com" target="_blank">小米商城</a>
    </div>
    <div class="copyright">
      Copyright 2021
    </div>
  </div>
</template>

<script>
export default {
  name: "index-nav-footer"
}
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.footer {
  height: 204px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;

  .footer-logo {
    margin-top: 26px;
    margin-bottom: 31px;

    img {
      width: 36px;
      height: 36px;
      margin-bottom: 13px;
    }
  }

  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }

    span {
      margin: 0 10px;
    }

    margin-bottom: 7px;
  }

  .copyright {
    margin-top: 6px;
  }
}
</style>