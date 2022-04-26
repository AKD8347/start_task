<template>
  <div class="task1">
    <div class="task1__content">
      <list :list="leftColumnCards"
            @got-to-bottom="loadCards(20)"
            @click-card="moveToRight"
            @show-tooltip="showTooltip"
            @hide-tooltip="hideTooltip"
            @sort="sortLeft"
            ref="list"/>
      <list :list="rightColumnCards"
            @click-card="moveToLeft"
            @show-tooltip="showTooltip"
            @hide-tooltip="hideTooltip"
            @sort="sortRight"/>
    </div>
    <tooltip ref="tooltip"/>
  </div>
</template>

<script>
import Tooltip from "./components/Tooltip";
import List from "@/views/task1/components/List";

export default {
  name: "task1",
  components: { Tooltip, List },
  data() {
    return {
      totalCardsCount: 10000,
      loadedCardsCount: 0,
      leftColumnCards: [],
      rightColumnCards: [],

      images: [
        require('@/assets/images/01.jpg'),
        require('@/assets/images/02.jpeg'),
        require('@/assets/images/03.jpeg'),
        require('@/assets/images/04.jpeg')
      ]
    }
  },
  mounted() {
    this.loadCards(40)
  },
  methods: {
    sortLeft() {
      this.leftColumnCards.sort((a, b) => a.number - b.number)
    },
    sortRight() {
      this.rightColumnCards.sort((a, b) => a.number - b.number)
    },
    showTooltip({$event, card}) {
      this.$refs.tooltip.show(card)
      this.$refs.tooltip.setPosition($event.target)
    },
    hideTooltip() {
      this.$refs.tooltip.hide()
    },
    moveToRight(index) {
      this.hideTooltip()
      const card = this.leftColumnCards[index]
      this.leftColumnCards.splice(index, 1)
      this.rightColumnCards.push(card)
      this.$refs.list.handleScroll(null)
    },
    moveToLeft(index) {
      this.hideTooltip()
      const card = this.rightColumnCards[index]
      this.rightColumnCards.splice(index, 1)
      this.leftColumnCards.push(card)
      this.$refs.list.handleScroll(null)
    },
    getRandomImage() {
      return this.images[Math.round(0 - 0.5 + Math.random() * 4)]
    },
    loadCards(cardsCount = 20) {
      if (this.loadedCardsCount >= this.totalCardsCount) {
        return
      }

      this.loadedCardsCount += cardsCount

      for (let i = 0; i < cardsCount; ++i) {
        this.leftColumnCards.push({
          imageSrc: this.getRandomImage(),
          number: this.leftColumnCards.length + this.rightColumnCards.length + 1
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.task1 {
  margin: 20px auto 0 auto;
  padding: 0 15px;
  max-width: 1350px;

  &__content {
    display: flex;
  }

}
</style>
