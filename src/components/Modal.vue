<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ this.title }}</span>
          <a href="javascript:" class="icon-close" v-on:click="cancel"></a>
        </div>
        <div class="modal-body">
          <slot name="body-slot"></slot>
        </div>
        <div class="modal-footer">
          <div class="btn-group" v-if="btnType==='3'">
            <a href="javascript:" class="btn" v-on:click="submit">{{ this.sureText }}</a>
            <a href="javascript:" class="btn btn-default" v-on:click="cancel">{{ this.cancelText }}</a>
          </div>
          <div v-else-if="btnType==='2'">
            <a href="javascript:" class="btn btn-default" v-on:click="cancel">{{ this.cancelText }}</a>
          </div>
          <div v-else>
            <a href="javascript:" class="btn" v-on:click="submit">{{ this.sureText }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    // 弹框类型：小、中、大、表单
    modalType: {
      type: String,
      default: 'form'
    },

    // 弹框标题
    title: String,

    // 按钮类型：确定、取消、确定和取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean,
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    cancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.modal {
  z-index: 10;
  transition: all .5s;
  @include position(fixed);

  .mask {
    @include position(fixed);
    background-color: $colorI;
    opacity: 0.5;
  }

  &.slide-enter-active {
    top: 0;
  }

  &.slide-enter {
    top: -100%;
  }

  &.slide-leave-active {
    top: -100%;
  }

  .modal-dialog {
    @include position(absolute, 40%, 50%, 660px, auto);
    background-color: $colorG;
    transform: translate(-50%, -50%);

    .modal-header {
      height: 60px;
      background-color: $colorJ;
      padding: 0 25px;
      line-height: 60px;
      font-size: $fontI;

      .icon-close {
        @include topRightPositionedImg(absolute, 23px, 25px, 14px, 14px, "/imgs/icon-close.png");
        transition: transform .3s;

        &:hover {
          transform: scale(1.5);
        }
      }
    }

    .modal-body {
      padding: 42px 40px 54px;
      font-size: $fontJ;
    }

    .modal-footer {
      height: 82px;
      line-height: 82px;
      text-align: center;
      background-color: $colorJ;
    }
  }
}
</style>