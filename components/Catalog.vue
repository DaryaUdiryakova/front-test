<template>
  <div class="catalog">
    <CatalogItem
      v-for="product in sortCategory"
      :key="product.id"
      :product="product"
    >
      <div @click="addCart(product)">
        <svg-icon
          name="cart"
          class="btn-buy"
          :id="`${product.id}`"
        />
      </div>
    </CatalogItem>

  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  computed: {
    sortCategory() {
      return this.$store.getters.sortCategory(this.products);
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    addCart(data) {
      this.addToCart(data);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/_mixin.scss";
@import "@/assets/css/item.scss";

.catalog {
  // max-width: 1100px;
  // max-width: 100%;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  .btn-buy {
    @include hoverButton(12px, 13px, $light-grey-text, $primary-text);
  }
}
</style>