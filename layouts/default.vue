<template>
  <div :class="getThemeClass">
    <AppTheme v-model="theme"></AppTheme>
    <nuxt />
  </div>
</template>

<script>
import AppTheme from '@/components/layout/AppTheme'

export default {
  components: { AppTheme },
  data: () => ({ theme: 'dark' }),
  computed: {
    getThemeClass() {
      return { [`theme--${this.theme}`]: true }
    }
  }
}
</script>

<style lang="scss" scoped>
@each $theme in $component-themes {
  .theme--#{$theme} {
    background-color: t($theme, 'background');
    color: t($theme, 'text');
  }
}
</style>
