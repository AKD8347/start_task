<template>
  <div class="list">
    <div class="list__sort-button">
      <button type="button"
              @click="$emit('sort', $event)">Sort</button>
    </div>
    <div class="list__content"
         @scroll="handleScroll"
         ref="listContent">
      <ul>
        <li v-for="(card, index) in list"
            :key="card.number"
            @mouseenter="showTooltip($event, card)"
            @mouseleave="$emit('hide-tooltip', $event)">
          <card :card-data="card"
                :sss="index"
                @click.native="$emit('click-card', index)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "@/views/task1/components/Card";

export default {
  name: "app",
  components: { Card },
  props: {
    list: { type: Array, default: () => [] }
  },
  methods: {
    showTooltip($event, card) {
      this.$emit('show-tooltip', {
        $event, card
      })
    },
    handleScroll($event) {
      if (this.$refs.listContent.scrollTop + this.$refs.listContent.clientHeight > this.$refs.listContent.scrollHeight - 120) {
        this.$emit('got-to-bottom', $event)
      }
    }
  }
}
</script>

<style lang="scss">
.list {
  flex: 0 1 50%;
  padding: 0 30px;

  &__sort-button {
    margin-bottom: 20px;
    > button {
      width: 90px;
      height: 40px;

      font-size: 14px;
      font-weight: 500;
      color: #409eff;

      border-radius: 4px;
      border: 1px solid #b3d8ff;
      background-color: #ecf5ff;

      transition: 200ms;

      &:hover {
        color: #FFFFFF;
        background-color: #409eff;
      }
    }
  }

  &__content {
    min-height: calc(100vh - 195px);
    max-height: calc(100vh - 195px);

    border-radius: 10px;
    background-color: #f5f7fa;
    border: 1px solid #ebebeb;

    overflow: auto;

    &:hover {
      box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
    }

    > ul {
      padding: 25px 20px;
      display: flex;
      flex-wrap: wrap;

      > li {
        position: relative;
        flex: 0 1 25%;

        padding: 0 10px;
        margin-bottom: 20px;

        height: 100px;

        cursor: pointer;
      }
    }
  }

}
</style>
