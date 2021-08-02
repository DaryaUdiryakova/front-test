<template>
  <div class="item-cart">
    <p class="item-cart__title">Товары в корзине</p>
    <transition-group name="anim-cart">
      <CatalogItem
        v-for="(product, index) in cart"
        :key="product.id"
        :product="product"
      >
        <div @click="deleteProduct(index, product)">
          <svg-icon
            name="trash"
            class="btn-remove"
          />

        </div>
      </CatalogItem>
    </transition-group>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["deleteFromCart"]),
    deleteProduct(index, product) {
      this.deleteFromCart(index);
      document.getElementById(`${product.id}`).style.fill = "";
      document.getElementById(`${product.id}`).classList.remove("animate-cart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/_mixin.scss";
@import "@/assets/css/item-cart.scss";

.anim-cart-item {
  display: inline-block;
  margin-right: 10px;
}
.anim-cart-enter-active,
.anim-cart-leave-active {
  transition: all 0.3s ease;
}
.anim-cart-enter-from,
.anim-cart-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.item-cart {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  margin-top: 20px;
  .item-cart__title {
    font-size: 18px;
    line-height: 23px;
    color: $grey-text;
    margin: 0 0 5px 0;
  }
  .btn-remove {
    @include hoverButton(20px, 20px, $light-grey-text, $primary-text);
  }
}
</style>