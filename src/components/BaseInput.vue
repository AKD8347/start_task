<template>
  <div class="base-input">
    <label v-if="label">{{ label }}</label>
    <input type="text"
           :placeholder="placeholder"
           :value="value"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'base-input',
  props: {
    value: { type: String, required: true },
    label: { type: String, default: null },
    placeholder: { type: String, default: 'Please input' }
  }
}
</script>

<style lang="scss">
.base-input {
  width: max-content;
  padding: 4px;

  > label {
    margin-bottom: 4px;
    display: block;
    text-align: left;
  }

  > input {
    padding: 0 15px;

    min-width: 180px;
    height: 40px;

    border: 1px solid #dcdfe6;
    border-radius: 4px;

    transition: 200ms;

    &:focus, &:focus-visible {
      border-color: #409eff!important;
      border-width: 1px!important;
    }

  }

}
</style>
