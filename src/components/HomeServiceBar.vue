<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>全场包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-service-bar"
}
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.service {
  margin-top: 100px;
  padding: 33px 0;
  color: $colorC;
  font-size: 16px;
  text-align: center;

  li {
    display: inline-block;
    width: 24%;
    text-align: center;
    border-right: 1px solid $colorH;

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: middle;
    }

    .icon-setting {
      @include bgImg(20px, 20px, "../../public/imgs/icon-setting.png", contain)
    }

    .icon-7day {
      @include bgImg(20px, 20px, "../../public/imgs/icon-7day.png", contain)
    }

    .icon-15day {
      @include bgImg(20px, 20px, "../../public/imgs/icon-15day.png", contain)
    }

    .icon-post {
      @include bgImg(20px, 20px, "../../public/imgs/icon-setting.png", contain)
    }
  }
}
</style>