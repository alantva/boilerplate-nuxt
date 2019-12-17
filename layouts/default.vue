<template>
  <div :class="getThemeClass">
    <AppTheme v-model="theme"></AppTheme>
    <AppFireflies v-if="isThemeDark"></AppFireflies>
    <nuxt />
  </div>
</template>

<script>
import AppTheme from '@/components/layout/AppTheme'
import AppFireflies from '@/components/layout/AppFireflies'

export default {
  components: { AppFireflies, AppTheme },
  data: () => ({ theme: 'dark' }),
  computed: {
    isThemeDark() {
      return this.theme === 'dark'
    },
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
