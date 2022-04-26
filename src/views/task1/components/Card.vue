<template>
  <div v-if="cardData" class="card">
    <img :src="cardData.imageSrc" alt="">
    <span>{{ cardData.number }}</span>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    cardData: { type: Object }
  }
}
</script>

<style scoped lang="scss">
.card {
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;

    border-radius: 8px;
    transition: 200ms;
  }
  span {
    position: absolute;
    top: -7px;
    right: 0;

    padding: 1px 3px;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    min-width: 20px;

    font-size: 12px;
    color: #FFFFFF;

    background-color: #202020;
    border-radius: 50%;
  }
}
</style>
