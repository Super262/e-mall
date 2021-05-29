<template>
  <div class="login">
    <div class="container">
      <a href="/#/">
        <img src="/imgs/login-logo.png" alt="">
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span v-on:click="switchToLogin" v-bind:class="showRegister?'':'checked'">登录</span>｜
            <span v-on:click="switchToRegister" v-bind:class="showRegister?'checked':''">注册</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="input" v-if="showRegister">
            <input type="text" placeholder="请输入邮箱" v-model="email">
          </div>
          <div class="btn-login-box" v-if="!showRegister">
            <a href="javascript:" class="btn-large" v-on:click="login">登录</a>
          </div>
          <div class="btn-register-box" v-if="showRegister">
            <a href="javascript:" class="btn-large" v-on:click="register">注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">

      </div>
      <p class="copyright">Copyright ©2021 Fengwei All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      showRegister: false,
      username: '',
      password: '',
      email: '',
      userId: ''
    }
  },
  methods: {
    switchToLogin() {
      this.showRegister = false;
    },
    switchToRegister() {
      this.showRegister = true;
    },
    login() {
      let {username, password} = this;
      this.axios.post("/user/login", {
        username,
        password
      }).then((res) => {
        if (res === undefined) {
          return;
        }
        // 保存校验信息
        this.$cookie.set('userId', res.id, {expires: '1M'});
        this.$store.dispatch("saveUserName", res.username);
        this.$router.back();
      });
    },
    register() {
      let {username, password, email} = this;
      this.axios.post("/user/register", {
        username,
        password,
        email
      }).then((res) => {
        if (res !== undefined) {
          this.$message.success("注册成功");
          this.switchToLogin();
        }
      });
    },

  }
}

</script>

<style lang="scss" scoped>
.login {
  & > .container {
    height: 69px;

    img {
      width: 248px;
      height: 69px;
    }
  }

  .wrapper {
    background-image: url("/imgs/login-bg.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 2880px 540px;

    .container {
      position: relative;
      height: 576px;

      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;

        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;

          .checked {
            color: #FF6600;
          }
        }

        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #E5E5E5;
          margin-bottom: 20px;

          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }

        .btn-login-box {
          margin-top: 10px;
        }

        .btn-register-box {
          margin-top: 15px;
        }
      }
    }
  }

  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;

    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }

      span {
        margin: 0 10px;
      }
    }

    .copyright {
      margin-top: 13px;
    }
  }
}
</style>