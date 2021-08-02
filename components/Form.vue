<template>
  <div :class="$style['form-section']">
    <p :class="$style['form-section__title']">Оформить заказ</p>
    <form
      @submit.prevent
      method="post"
      :class="$style['form-section__form']"
    >
      <input
        :class="$style['form-section__input']"
        v-model="name"
        type="text"
        placeholder="Ваше имя"
      >

      <input
        :class="$style['form-section__input']"
        v-model="phone"
        type="text"
        placeholder="Телефон"
        id="phoneMask"
      >

      <input
        :class="$style['form-section__input']"
        v-model="address"
        type="text"
        placeholder="Адрес"
      >

      <button
        type="submit"
        :class="$style['form-section__btn']"
        @click="sendCart"
        :disabled="!isDisabled"
      >Отправить</button>
    </form>

    <SuccessfulSend
      :class="$style['successfully-sent']"
      v-if="showSuccessfully"
    />

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      showSuccessfully: false,
    };
  },
  props: ["statusOK"],
  methods: {
    ...mapActions(["clearCart", "clearCart"]),
    sendCart() {
      this.name = "";
      this.phone = "";
      this.address = "";
      this.showSuccessfully = !this.showSuccessfully;
      document.querySelector("#modalPanel").scrollTop = 0;
      setTimeout(() => {
        this.clearCart();
      }, 3000);
    },
    setCursorPosition(pos, elem) {
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    },
    mask(event) {
      let matrix = "+7 ___ ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.phone.replace(/\D/g, "");
      // console.log(val)
      if (def.length >= val.length) val = def;
      this.phone = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });
      if (event.type == "blur") {
        if (this.phone.length == 2) this.phone = "";
      } else this.setCursorPosition(this.phone.length, this);
    },
  },
  computed: {
    ...mapState(["cart"]),

    isDisabled() {
      if (this.name && this.phone.length == 16 && this.address) {
        return true;
      }
    },
  },
  mounted() {
    let input = document.querySelector("#phoneMask");
    input.addEventListener("input", this.mask, false);
    input.addEventListener("focus", this.mask, false);
    input.addEventListener("blur", this.mask, false);
  },
};
</script>
<style lang="scss" module>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/_mixin.scss";
.form-section {
  padding-top: 15px;
  .form-section__title {
    font-size: 18px;
    line-height: 23px;
    color: $grey-text;
    margin: 10px 0;
  }
  .form-section__form {
    .form-section__input {
      width: 100%;
      background: #f8f8f8;
      border-radius: 8px;
      margin: 7px 0;
      outline: none;
      padding: 14px;
      font-size: 16px;
      line-height: 21px;
      color: $primary-text;

      &::placeholder {
        font-size: 16px;
        line-height: 21px;
        color: $light-grey-text;
      }
      &::-webkit-input-placeholder {
        font-size: 16px;
        line-height: 21px;
        color: $light-grey-text;
      }
      &::-moz-placeholder {
        font-size: 16px;
        line-height: 21px;
        color: $light-grey-text;
      }
    }
    .form-section__btn {
      @include formButton;
    }
  }
  .successfully-sent {
    position: absolute;
    background: #fff;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
}
</style>