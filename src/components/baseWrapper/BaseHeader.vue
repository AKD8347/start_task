<template>
  <header class="base-header">
    <div class="base-header__content">
      <transition name="fade" mode="out-in">
        <div v-if="showBack"
             class="base-header__back"
             @click="$router.back()">
          <img src="@/assets/images/arrow.png" alt="">
          <span>Назад</span>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: 'base-header',
  computed: {
    route() {
      return this.$route.name
    },
    showBack() {
      return this.route !== 'home'
    }
  }
}
</script>

<style scoped lang="scss">
.base-header {
  width: 100%;
  height: 70px;

  border: 1px solid #e6e6e6;

  &__content {
    height: inherit;
    max-width: 1400px;
    margin: 0 auto;
  }

  &__back {
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    align-items: center;

    width: max-content;
    height: inherit;

    cursor: pointer;

    > img {
      width: 26px;
      height: 26px;
      object-fit: contain;

      margin-right: 15px;
    }

    > span {
      font-size: 16px;
      font-weight: 400;
    }

  }
}
</style>
