<template>
  <div class="task-card">
    <div class="task-card__image">
      <img :src="image" alt="">
    </div>
    <div class="task-card__title">
      <span>{{ title }}</span>
    </div>
    <div class="task-card__description">
      <span>{{ description }}</span>
    </div>
    <div class="task-card__button">
      <router-link :to="route">Открыть</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-card',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },

    route: { type: String, required: true }
  }
}
</script>

<style scoped lang="scss">
.task-card {
  margin-left: 20px;
  margin-right: 20px;
  width: 180px;

  &__image {
    > img {
      width: 60px;
      height: 60px;
      object-fit: contain;
    }
  }

  &__title {
    margin-top: 20px;
    margin-bottom: 10px;
    > span {
      font-size: 18px;
      font-weight: 300;
    }
  }

  &__description {
    height: 60px;
    > span {
      font-size: 16px;
      font-weight: 400;
      font-style: italic;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100px;
      height: 36px;

      color: #FFFFFF;
      background-color: #409eff;
      border-radius: 4px;

      transition: 200ms;

      &:hover {
        background-color: #5aabff;
      }
    }
  }

}
</style>
