<template>
  <nav
    :class="$style['nav-container']"
    class="wrapper__catalog-nav"
  >
    <ul>
      <li :class="$style['nav-container__list']">
        <nuxt-link
          exact
          to="/"
        >{{categoryList[0].name}}</nuxt-link>
      </li>
      <li :class="$style['nav-container__list']">
        <nuxt-link to="/bagMessenger">{{categoryList[1].name}}</nuxt-link>
      </li>
      <li :class="$style['nav-container__list']">
        <nuxt-link to="/bagBusiness">{{categoryList[2].name}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    sortItem: {
      type: String,
    },
  },
  computed: {
    categoryList() {
      return this.$store.state.category;
    },
  },
};
</script>
<style lang="scss" module>
.nav-container {
  padding-right: 20px;
  .nav-container__list {
    margin-bottom: 7px;
  }
}
</style>