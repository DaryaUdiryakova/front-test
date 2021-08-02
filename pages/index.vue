<template>
  <div>
    <Catalog :products="testCategory" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryNum: 1,
    };
  },

  computed: {
    ...mapGetters(["isCategory"]),

    testCategory() {
      return this.isCategory(this.categoryNum);
    },
  },
};
</script>
