<template>
  <div class="order-list">
    <order-header title="订单列表" tips="请谨防钓鱼链接或诈骗电话！"></order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in orderList" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                创建时间：{{
                  new Date(parseInt(order.createdTime)).toLocaleString().replace(/:\d{1,2}$/, ' ')
                }}
                <span>|</span>
                订单号：{{ order.orderNo }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.paymentAmount }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img :src="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div>{{ item.productName }}<span
                        style="margin-left: 20px">{{ item.totalPrice + '元 x ' + item.quantity }}</span></div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status === 20">
                <a href="javascript:">支付成功</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:" @click="goPay(order.orderNo)">立即付款</a>
              </div>
            </div>
          </div>
          <el-pagination
              v-if="true"
              background
              layout="prev, pager, next"
              :page-size="pageSize"
              :page-count="pagesCount"
              @current-change="handleChange"
          >
          </el-pagination>
          <no-data v-if="!loading && orderList.length===0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '../../components/OrderHeader'
import Loading from '../../components/Loading'
import NoData from '../../components/NoData'
import {Pagination, Button} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'orders-list',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: {
    infiniteScroll
  },
  data() {
    return {
      loading: false,
      orderList: [],
      pageSize: 4,
      pageNum: 1,
      pagesCount: 0,
      showNextPage: true,//加载更多：是否显示按钮
      busy: false,//滚动加载，是否触发
    }
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.loading = true;
      this.busy = true;
      this.axios.get('/orders', {
        params: {
          pageSize: 4,
          pageNum: this.pageNum
        }
      }).then((res) => {
        if (res !== undefined) {
          this.loading = false;
          this.orderList = res.list
          this.pagesCount = res.pages;
          this.showNextPage = res.hasNextPage;
          this.busy = false;
        }
      }).catch(() => {
        this.loading = false;
      })
    },
    goPay(orderNo) {
      this.$router.push({
        path: '/order/orderPayment',
        query: {
          orderNo
        }
      })
    },
    // 第一种方法：分页器
    handleChange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList();
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/config.scss';
@import '../../assets/scss/mixin.scss';

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;

    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;

        &:last-child {
          margin-bottom: 0;
        }

        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;

          .item-info {
            span {
              margin: 0 9px;
            }
          }

          .money {
            font-size: 26px;
            color: $colorB;
          }
        }

        .order-content {
          padding: 0 43px;

          .good-box {
            width: 88%;

            .good-list {
              display: flex;
              align-items: center;
              height: 145px;

              .good-img {
                width: 112px;

                img {
                  width: 100%;
                }
              }

              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }

          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;

            a {
              color: $colorA;
            }
          }
        }
      }

      .pagination {
        text-align: right;
      }

      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #FF6600;
      }

      .el-button--primary {
        background-color: #FF6600;
        border-color: #FF6600;
      }

      .load-more, .scroll-more {
        text-align: center;
      }
    }
  }
}
</style>