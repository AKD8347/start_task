<template>
  <div class="task2">
    <div class="task2__progress-wrapper">
      <arc-progress-bar
          :progress="progress"
          :diameter="diameter"
          :bg-color="bgColor"
          :line-color="lineColor"
          :weight="weight"
          :visible-part-of-circle="visiblePartOfCircle"
          :max-progress="maxProgress"
          :counter-position="counterPosition"
          :transition-speed="transitionSpeed"
          :transition-timing-function="transitionTimingFunction"/>
    </div>
    <div class="task2__actions">

      <div class="d-flex">
        <base-input-number v-model="progress"
                           label="Значение прогресса (0-100%)"
                           :step="5"
                           :min="0" :max="100"/>
        <base-input-number v-model="diameter"
                           label="Диаметр (100-400px)"
                           :step="10"
                           :min="100" :max="400"/>
      </div>

      <div class="d-flex">
        <base-input-number v-model="visiblePartOfCircle"
                           label="Видимая часть окружности (30-100%)"
                           :step="5"
                           :min="30" :max="100"/>
        <base-input-number v-model="maxProgress"
                           label="Макс. значение прогресса (0-100%)"
                           :step="5"
                           :min="0" :max="100"/>
      </div>

      <base-input-number v-model="weight"
                         label="Ширина линии (1-6)"
                         :step="0.5"
                         :min="1" :max="6"/>

      <div class="d-flex">
        <base-input v-model="bgColor"
                    label="Цвет фоновой линии"/>
        <base-input v-model="lineColor"
                    label="Цвет линии прогресса"/>
      </div>

      <div class="task2__radios">
        <label>Позиция счетчика</label>
        <div class="item">
          <label>
            <span>Center</span>
            <input v-model="counterPosition" type="radio" value="center">
          </label>
        </div>
        <div class="item">
          <label>
            <span>Bottom</span>
            <input v-model="counterPosition" type="radio" value="bottom">
          </label>
        </div>
      </div>

      <div class="d-flex">
        <base-input v-model="transitionSpeed"
                    label="Скорость анимации"/>
        <base-input v-model="transitionTimingFunction"
                    label="Функция анимации"/>
      </div>

    </div>
  </div>
</template>

<script>
import ArcProgressBar from "@/views/task2/components/ArcProgressBar";
import BaseInput from "@/components/BaseInput";
import BaseInputNumber from "@/components/BaseInputNumber";

export default {
  name: 'app',
  components: { ArcProgressBar, BaseInput, BaseInputNumber },
  data() {
    return {
      diameter: 300,
      progress: 70,
      weight: 5,
      bgColor: '#e5e9f2',
      lineColor: '#f56c6c',
      visiblePartOfCircle: 70,
      maxProgress: 100,
      transitionSpeed: '500ms',
      transitionTimingFunction: 'linear',
      counterPosition: 'center'
    }
  }
}
</script>

<style scoped lang="scss">
.d-flex {
  display: flex;
}
.task2 {
  padding: 20px;
  display: flex;

  &__radios {
    text-align: left;
    padding: 4px;
    > label {
      display: block;
      margin-bottom: 4px;
    }
    .item {
      margin-top: 4px;
      margin-bottom: 4px;
      span {
        margin-right: 10px;
      }
    }
  }

  &__progress-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
  }

  &__actions {
    width: 50%;
  }

}
</style>

<style lang="scss">
.task2 {
  .base-input-number {
    width: 280px;
  }
}
</style>
