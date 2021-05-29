<template>
  <div class="home">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item" v-for="(categoryObject, catagoryIndex) in allCategoryList" v-bind:key="catagoryIndex">
              <a v-bind:href="'/#/departmentOverview/'+categoryObject.category">{{ categoryObject.title }}</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in sliderList" v-bind:key="index">
            <a v-bind:href="'/#/productDetail/'+item.id"><img v-bind:src="item.img" alt="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <home-service-bar/>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import HomeServiceBar from "../../components/HomeServiceBar";

export default {
  name: "home",
  components: {HomeServiceBar, Swiper, SwiperSlide},
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }
      },
      sliderList: [
        {
          id: '42',
          img: '/imgs/slider/slider-1.png'
        },
        {
          id: '45',
          img: '/imgs/slider/slider-2.png'
        },
        {
          id: '46',
          img: '/imgs/slider/slider-3.png'
        },
        {
          id: '47',
          img: '/imgs/slider/slider-4.png'
        },
        {
          id: '48',
          img: '/imgs/slider/slider-5.png'
        }
      ],
      allCategoryList: [
        {
          title: "电脑整机",
          category: "computer",
        },
        {
          title: "CPU",
          category: "cpu",
        },
        {
          title: "内存",
          category: "memory",
        },
        {
          title: "显卡",
          category: "gpu",
        },
        {
          title: "固态硬盘",
          category: "ssd",
        },
        {
          title: "机械硬盘",
          category: "hdd",
        },
        {
          title: "电源",
          category: "powerSupply",
        },
        {
          title: "显示器",
          category: "monitor",
        }
      ],
      showModal: false
    }
  },
  mounted() {
    this.initSliderList();
  },
  methods: {
    initSliderList() {
      // 请求轮播图
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";

.home {
  .container {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: rgba(0, 0, 0, 0.48);
        box-sizing: border-box;

        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;

            a {
              display: block;
              position: relative;
              font-size: $fontI;
              color: $colorG;
              padding-left: 30px;

              &:after {
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: "";
                @include bgImg(10px, 15px, "/imgs/icon-arrow.png")
              }
            }

            &:hover {
              background-color: $colorA;
            }
          }
        }
      }

      .swiper-container {
        height: 451px;

        .swiper-button-prev {
          left: 274px;
        }

        img {
          width: 100%;
        }
      }
    }
  }

}
</style>