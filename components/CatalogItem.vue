<template>
  <div
    :class="$style['product-item']"
    class="global-item"
  >
    <div
      :class="$style['product-item__rating']"
      class="global-item__rating"
    >
      <svg-icon
        name="star"
        :class="$style['product-item__star']"
      />
      <span :class="$style['product-item__num-rating']">{{product.rating}}</span>
    </div>
    <img
      :class="$style['product-item__photo']"
      class="global-item__photo"
      :src="'https://frontend-test.idaproject.com' + product.photo"
      alt="Product image"
    />
    <div
      :class="$style['product-item__button']"
      class="global-item__button"
    >
      <slot></slot>
    </div>

    <div
      :class="$style['product-item__text']"
      class="global-item__text"
    >
      <p :class="$style['product-item__name']">{{ funcTransformName(product.name) }}</p>
      <p :class="$style['product-item__price']">{{ funcTransformPrice(product.price) }} &#8381;</p>
    </div>
  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["funcTransformPrice", "funcTransformName"]),
  },
};
</script>
<style lang="scss" module>
@import "@/assets/css/_variables.scss";
.product-item {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 15px;
  .product-item__rating {
    display: flex;
    align-items: flex-start;

    .product-item__star {
      width: 14px;
      height: 14px;
    }

    .product-item__num-rating {
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      margin-left: 3px;
      color: $rating-text;
    }
  }

  .product-item__text {
    .product-item__name {
      font-size: 14px;
      line-height: 18px;
      color: $grey-text;
      margin-bottom: 3px;
    }

    .product-item__price {
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: $primary-text;
    }
  }
}
</style>