<template>
  <div class="tooltip"
       ref="tooltip"
       :style="{top: this.coords.top + 'px', left: this.coords.left + 'px'}">
    <div class="tooltip__body"
         v-if="isShown">
      <span :style="trianglePosition"></span>
      <card :card-data="cardData"/>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "tooltip",
  components: { Card },
  data() {
    return {
      isShown: false,
      coords: {
        left: 0,
        top: 0
      },
      cardData: {},
      placement: ""
    }
  },
  methods: {
    show(cardData) {
      this.isShown = true
      this.cardData = cardData
    },
    hide() {
      this.isShown = false
    },
    setPosition(target) {
      const coords = target.getBoundingClientRect()

      this.coords.left = coords.left + (target.offsetWidth - this.$refs.tooltip.offsetWidth) / 2
      if (this.coords.left < 0) this.coords.left = 15

      this.coords.top = coords.top - this.$refs.tooltip.offsetHeight - 25
      this.placement = 'bottom'
      if (this.coords.top < 0) {
        this.coords.top = coords.top + target.offsetHeight + 25
        this.placement = 'top'
      }

    }
  },
  computed: {
    trianglePosition() {
      return {
        borderBottom: this.placement === 'top' ? '20px solid #cbc9c9' : '',
        borderTop: this.placement === 'bottom' ? '20px solid #cbc9c9' : '',
        top: this.placement === 'top' ? "-43px" : "",
        bottom: this.placement === 'bottom' ? "-43px" : "",
      }
    }
  }
}
</script>


<style scoped lang="scss">
.tooltip {
  position: fixed;
  width: 400px;
  pointer-events: none;
  height: 300px;
  &__body {
    position: relative;
    border: 3px solid #cbc9c9;
    height: 100%;
    span {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      border: 20px solid transparent;
    }
  }
}
</style>

<style lang="scss">
.tooltip {
  .card {
    height: 100%;
    img {
      height: 100%;
    }
    span {
      width: 30px;
      height: 30px;
      font-size: 18px;
      top: -14px;
      right: -9px;
    }
  }
}
</style>
