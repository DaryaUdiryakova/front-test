<template>
  <div :class="$style.container">
    <div :class="$style['container-header-fixed']">
      <div :class="$style['container-header']">
        <p :class="$style.logo">TestList</p>

        <div :class="$style['container-cart']">

          <svg-icon
            name="cart"
            @click="openCartModal()"
            :class="$style['btn-cart']"
          />

          <span :class="$style['cart-length']">{{this.cart.length}} </span>

        </div>

      </div>
    </div>
    <Modal
      :showModal="modalActive"
      @onClose="closeModal"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      modalActive: false,
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    openCartModal() {
      this.modalActive = true;
      document.body.style.position = "fixed";
    },
    closeModal() {
      this.modalActive = false;
      document.body.style.position = "";
    },
  },
};
</script>
<style lang="scss" module>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/_mixin.scss";
.container {
  .container-header-fixed {
    position: fixed;
    width: 100%;
    z-index: 99;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    .container-header {
      padding: 18px 88px;
      margin: 0 auto;
      max-width: 1440px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 900px) {
        padding: 18px 25px;
      }
      .logo {
        font-size: 22px;
        line-height: 28px;
        font-weight: 700;
        color: $grey-text;
      }

      .btn-cart {
        @include hoverButton(24px, 26px, $primary-text, $grey-text);
      }
      .container-cart {
        position: relative;

        .cart-length {
          position: absolute;
          right: -3px;
          top: -4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: $light-grey-text;
          font-size: 7px;
          line-height: 14px;
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
