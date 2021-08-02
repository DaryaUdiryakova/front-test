<template>
  <div>
    <div :class="$style['dropdown-wrapper']">
      <p :class="$style['dropdown-wrapper__p']">Сортировать по:
        <span @click="showDropdown = !showDropdown">

          <svg-icon
            name="arrow"
            :class="$style['dropdown-wrapper__click']"
          />

        </span>
      </p>
      <transition name="fade-filter">

        <div
          :class="$style['dropdown-wrapper__select']"
          v-if="showDropdown"
        >
          <p
            @click="textParam=sortParamPrice; showDropdown = !showDropdown; $emit('sortParamClick', sortParam)"
            :class="$style['dropdown-wrapper__p']"
          >По цене </p>

          <p
            @click="textParam=sortParamRating; showDropdown = !showDropdown; $emit('sortParamClick', sortParam)"
            :class="$style['dropdown-wrapper__p']"
          >По популярности</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false,
      sortParamPrice: "price",
      sortParamRating: "rating",
      textParam: "",
    };
  },

  computed: {
    sortParam() {
      return this.sortParamClick();
    },
  },

  methods: {
    sortParamClick() {
      this.$store.commit("toogleSortParam", this.textParam);
    },
  },
};
</script>
<style lang="scss" module>
@import "@/assets/css/_variables.scss";
.dropdown-wrapper {
  position: relative;

  .dropdown-wrapper__click {
    vertical-align: middle;
    width: 10px;
    height: 5px;
    cursor: pointer;
  }

  .dropdown-wrapper__select {
    position: absolute;
    width: 160px;
    padding: 8px 0;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    z-index: 5;
    right: 0;
    top: 30px;
    .dropdown-wrapper__p {
      font-size: 14px;
      line-height: 26px;
      padding: 4px 12px;
      color: $light-grey-text;
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
        color: $primary-text;
      }
    }
  }
}
</style >