<template>
  <div class="detail">
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(url,urlIndex) in productInfo.subImages.split(',')" v-bind:key="urlIndex">
              <img v-bind:src="url" alt="image">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{ productInfo.title }}</h2>
          <p class="item-info">{{ productInfo.detail }}</p>
          <div class="item-price">{{ productInfo.price }}元</div>
          <a href="javascript:" class="btn-large" @click="addToCart">加入购物车</a>
        </div>
      </div>
    </div>
    <div class="spec-info">
      <div class="container">
        <h3>技术规格</h3>
        <el-table
            v-bind:data="productInfo.specDetail"
            border
            style="width: inherit">
          <el-table-column
              prop="property"
              label="属性名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="value"
              label="值（原始）">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <home-service-bar/>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import HomeServiceBar from "@/components/HomeServiceBar";

export default {
  name: 'product-detail',
  data() {
    return {
      productId: this.$route.params.id,//获取商品ID
      productInfo: {
        title: "",
        detail: "",
        price: 0,
        subImages: [],
        specDetail: []
      },//商品信息
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    HomeServiceBar
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      this.axios.get('/product/' + this.productId).then((data) => {
        this.productInfo.title = data.name;
        this.productInfo.detail = data.subtitle;
        this.productInfo.price = data.price;
        this.productInfo.subImages = data.subImages;
        this.renderSpec(data.rawData);
      });
    },
    renderSpec(rawData) {
      for (let key in rawData) {
        this.productInfo.specDetail.push({property: key, value: rawData[key]})
      }
    },
    addToCart() {
      this.axios.post('/carts', {
        productId: this.productId,
        selected: true
      }).then((res = {cartProductVoList: 0}) => {
        if (!res.cartTotalQuantity) {
          res.cartTotalQuantity = 0;
        } else {
          this.$router.push({
            path: "/cart"
          });
        }
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
      });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/config.scss';
@import '../../assets/scss/mixin.scss';

.detail {
  .wrapper {
    .swiper {
      float: left;
      width: 600px;
      height: 610px;

      img {
        width: 600px;
        height: auto;
      }
    }

    .content {
      margin-top: 150px;
      margin-left: 50px;
      float: left;
      width: 284px;
      height: 100%;
      padding: 20px;

      .item-title {
        font-size: $fontC;
        height: 42px;
        margin-bottom: 20px;
      }

      .item-info {
        font-size: $fontJ;
        height: 46px;
        margin-bottom: 20px;
      }

      .item-price {
        font-size: $fontG;
        color: $colorA;
        height: 40px;
        margin-bottom: 20px;
      }
    }
  }

  .spec-info {
    background-color: #F3F3F3;
    min-height: 400px;

    h3 {
      font-size: $fontG;
      color: $colorB;
      padding-top: 38px;
      margin-bottom: 30px;
    }
  }
}
</style>