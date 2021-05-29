<template>
  <div class="department">
    <div class="container">
      <h3>所有{{ categoryToHumanName[category] }}</h3>
      <div class="goods-part">
        <div class="goods-list">
          <div class="productItem" v-for="(item,itemIndex) in currentPageGoodsList" v-bind:key="itemIndex">
            <div class="item-img">
              <a v-bind:href="'/#/productDetail/'+item.id">
                <img v-bind:src="item.mainImage" alt="main-image"/>
              </a>
            </div>
            <div class="item-info">
              <h3 class="name">{{ item.name }}</h3>
              <p class="intro">{{ item.subtitle }}</p>
              <p class="price">{{ item.price }}元</p>
            </div>
          </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            v-on:current-change="getCurrentPageGoodsList"
            v-bind:page-size="pageSize"
            v-bind:page-count="allPagesCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "department-overview",
  computed: {
    category: function () {
      return this.$route.params.category
    }
  },
  data() {
    return {
      categoryToHumanName: {
        cpu: "CPU",
        computer: "电脑整机",
        memory: "内存",
        gpu: "显卡",
        ssd: "固态硬盘",
        hdd: "机械硬盘",
        powerSupply: "电源",
        monitor: "显示器"
      },
      currentPageGoodsList: [],
      pageSize: 20,
      allPagesCount:0
    }
  },
  methods: {
    getCurrentPageGoodsList(nextPageIndex = 1) {
      this.axios.get('/productList', {
        params: {
          category: this.category,
          pageNum: nextPageIndex,
          pageSize: this.pageSize
        }
      }).then((data) => {
        this.allPagesCount = data.pages;
        this.currentPageGoodsList = data.list;
      });
    }
  },
  mounted() {
    this.getCurrentPageGoodsList(1);
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";

.container {
  padding: 10px;
  height: 1050px;
  margin-bottom: 20px;

  .goods-part {
    float: left;
    width: 1175px;
    background-color: $colorJ;
    height: 990px;
    padding: 25px;

    .goods-list {
      height: 970px;
      margin-bottom: 10px;

      .productItem {
        float: left;
        width: 215px;
        height: 215px;
        background-color: $colorG;
        text-align: center;
        margin: 10px;

        .item-img {
          img {
            max-width: 100%;
            height: 85px;
          }

          margin: 30px auto 10px;
        }

        .item-info {
          .name {
            font-size: $fontJ;
            color: $colorB;
            line-height: $fontJ;
            font-weight: bold;
          }

          .intro {
            font-size: $fontK;
            color: $colorD;
            line-height: $fontK;
            margin: 10px auto 10px;
          }

          .price {
            color: #F20A0A;
            font-size: $fontJ;
            font-weight: bold;
            margin: 6px auto 13px;
          }

        }
      }
    }

  }

}

</style>