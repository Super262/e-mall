<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div>
          <a href="/#/">最优质的电脑整机和组件</a>
        </div>
        <div>
          <a href="javascript:" v-if="!username" @click="login">登录｜注册</a>
          <a href="javascript:" v-if="username" @click="logout">退出登录 {{ username }}</a>
          <a href="/#/order/ordersList" v-if="username">我的订单</a>
          <a href="javascript:" class="my-cart" v-on:click="goToCart">
            <span class="icon-cart"/>购物车（{{ cartCount }}）
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/"/>
        </div>
        <div class="header-title">E-Mall 商城</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index-nav-header",
  computed: {
    username() {
      return this.$store.state.userName;
    },
    cartCount() {
      return this.$store.state.cartCount;
    }
  },
  filters: {
    currency(val) {
      if (!val) {
        return 0.00
      }
      return '¥' + val.toFixed(2) + '元';
    }
  },
  methods: {
    goToCart() {
      this.$router.push('/cart');
    },
    logout() {
      this.axios.post('/user/logout').then(() => {
        this.$message.success("注销成功！");
        this.$cookie.set('userId', '', {expires: '-1'});
        this.$store.dispatch("saveUserName", undefined);
        this.$store.dispatch("saveCartCount", 0);
      });
    },
    login() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    color: #B0B0B0;

    .container {
      @include flex();

      a {
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: $colorG;

        .icon-cart {
          @include bgImg(16px, 12px, "../../public/imgs/icon-cart-checked.png", contain);
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex(flex-start,center);


      .header-title {
        display: inline-block;
        width: 720px;
        font-size: $fontF;
        margin-left: 40px;
      }
    }
  }
}
</style>