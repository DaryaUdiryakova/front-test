<template>

  <div class="wrapper__catalog-header">
    <p class="title">Каталог</p>
    <!-- <FilterCatalog /> -->
  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.wrapper__catalog-header {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: $primary-text;
  }
}
</style>
<script>
export default {};
</script>