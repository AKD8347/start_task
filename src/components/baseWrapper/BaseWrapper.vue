<template>
  <div class="base-wrapper">
    <base-header/>
    <div class="base-wrapper__content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/baseWrapper/BaseHeader";

export default {
  name: 'base-wrapper',
  components: { BaseHeader }
}
</script>

<style scoped lang="scss">
</style>
