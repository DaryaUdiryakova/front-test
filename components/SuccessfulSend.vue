<template>
  <div :class="$style['modal-ok']">
    <img
      class="pulse-ok-hand"
      src="@/assets/images/ok-hand.png"
      alt="Ok"
      :class="$style['modal-ok__img']"
    >
    <p :class="$style['modal-ok__title']">Заявка успешно отправлена</p>
    <p :class="$style['modal-ok__p']"> Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" module>
@import "@/assets/css/_variables.scss";
.modal-ok {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(50% - 100px) 20px 20px 20px;
  .modal-ok__img {
    width: 80px;
    height: 80px;
  }

  .modal-ok__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    margin: 25px 0 3px 0;
  }
  .modal-ok__p {
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: $grey-text;
  }
}
</style>