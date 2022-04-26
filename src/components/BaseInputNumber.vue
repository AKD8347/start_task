<template>
  <div class="base-input-number">
    <label v-if="label">{{ label }}</label>
    <div class="base-input-number__content">
      <button class="minus"
              :disabled="min !== null && value <= min"
              @click="handleInput(value - step)">-</button>
      <input type="number"
             :placeholder="placeholder"
             :value="value"
             @input="handleInput($event.target.value)"
             @blur="handleBlur($event.target.value)"
             @keyup.enter="handleInput($event.target.value)"
             ref="input">
      <button class="plus"
              :disabled="max !== null && value >= max"
              @click="handleInput(value + step)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-input-number',
  props: {
    value: { type: Number, required: true },
    label: { type: String, default: null },
    min: { type: Number, default: null },
    max: { type: Number, default: null },
    step: { type: Number, default: 1 },
    placeholder: { type: String, default: 'Please input' }
  },
  methods: {
    handleBlur(val) {
      const value = Number.parseFloat(val)
      if (this.min && value < this.min) {
        this.$refs.input.value = this.min
      } else if (this.max && value > this.max) {
        this.$refs.input.value = this.max
      }
    },
    handleInput(val) {
      const value = Number.parseFloat(val)
      if (this.min && value < this.min) {
        this.$emit('input', this.min)
        return
      }
      if (this.max && value > this.max) {
        this.$emit('input', this.max)
        return
      }
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.base-input-number {
  padding: 4px;

  > label {
    margin-bottom: 4px;
    display: block;
    text-align: left;
  }

  &__content {
    width: max-content;
    border: 1px solid #dcdfe6;
    border-radius: 2px;

    &:hover {
      border-color: #409eff;
    }

    > button {
      width: 40px;
      height: 40px;

      font-size: 16px;
      font-weight: 500;
      color: #606266;
      background-color: #f5f7fa;

      border: none;

      cursor: pointer;

      &:disabled {
        cursor: no-drop;
      }
      &.minus {
        border-right: 1px solid #dcdfe6;
      }
      &.plus {
        border-left: 1px solid #dcdfe6;
      }

    }

    > input {
      margin-right: -20px;

      width: 100px;
      height: 40px;

      border: none;

      text-align: center;
    }

  }
}
</style>
