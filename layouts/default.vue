<template>
  <div>
    <Header />
    <main class="wrapper">
      <SectionFilter />
      <NavMenu />
      <nuxt class="wrapper__nuxt" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 70px 88px 40px 88px;
  display: grid;
  grid-template-columns: 160px minmax(300px, 1100px);
  justify-content: center;
  .wrapper__catalog-header {
    grid-column: 1 / 3;
  }
}
@media (max-width: 900px) {
  .wrapper {
    padding: 0px 25px 30px 25px;
  }
}
@media (max-width: 525px) {
  .wrapper {
    grid-template-columns: 1fr;
    .wrapper__catalog-header,
    .wrapper__catalog-nav,
    .wrapper__nuxt {
      grid-column: 1 / 3;
    }
    .wrapper__catalog-nav {
      margin-bottom: 30px;
    }
    .wrapper__nuxt {
      justify-self: center;
    }
  }
}
</style>
<script>
export default {
  async fetch() {
    await this.$store.dispatch("fetchProduct");
    await this.$store.dispatch("fetchCategory");
  },

  // Category   JSON.parse(localStorage.getItem("cartState"))
};
</script>