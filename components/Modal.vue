<template>
  <transition name="animateModal">
    <div
      :class="$style['container-modal']"
      v-if="showModal"
    >
      <div
        :class="$style['container-modal__panel']"
        id="modalPanel"
      >
        <div :class="$style['container-modal__header']">
          <p :class="$style['container-modal__title']">Корзина</p>
          <svg-icon
            @click="closeCartModal()"
            name="close"
            :class="$style['container-modal__close']"
          />
        </div>

        <div
          :class="$style['container-modal__cart-false']"
          v-if="!this.cart.length"
        >
          <p :class="$style['container-modal__false-p']">Пока что вы ничего не добавили в корзину.</p>
          <button
            :class="$style['container-modal__false-btn']"
            @click="closeCartModal()"
          > Перейти к выбору</button>
        </div>

        <div
          :class="$style['container-modal__cart-send']"
          v-else
        >
          <Cart />
          <Form />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeCartModal() {
      this.$emit("onClose");
    },
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>
<style lang="scss" module>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/_mixin.scss";
.container-modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);

  .container-modal__panel {
    position: fixed;
    width: 460px;
    right: 0;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    z-index: 100;
    background: #fff;
    padding: 50px 0;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    overflow: scroll;
    @include animationPanelCart;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  .container-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    @media (max-width: 500px) {
      padding: 0 25px;
    }
    .container-modal__title {
      font-weight: bold;
      font-size: 32px;
      line-height: 41px;
      color: #000000;
    }
    .container-modal__close {
      width: 14px;
      height: 14px;
      cursor: pointer;
    }
  }
  .container-modal__cart-false {
    padding: 0 48px;
    @media (max-width: 500px) {
      padding: 0 25px;
    }
    .container-modal__false-p {
      padding: 24px 0;
      font-size: 22px;
      line-height: 28px;
      color: #000000;
    }

    .container-modal__false-btn {
      @include formButton;
    }
  }
  .container-modal__cart-send {
    margin-top: 25px;
    position: relative;
    padding: 0 48px;
    @media (max-width: 500px) {
      padding: 0 25px;
    }
  }
}
</style>
