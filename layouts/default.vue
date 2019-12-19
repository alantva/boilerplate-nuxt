<template>
  <div :class="getThemeClass">
    <AppTheme v-model="theme"></AppTheme>
    <AppFireflies></AppFireflies>
    <nuxt />
  </div>
</template>

<script>
import AppTheme from '@/components/layout/AppTheme'
import AppFireflies from '@/components/layout/AppFireflies'

export default {
  components: { AppFireflies, AppTheme },
  data: () => ({
    theme: 'dark'
  }),
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
    $backgroundColor: t($theme, 'background');
    color: t($theme, 'text');

    @if $theme == 'dark' {
      background: linear-gradient(
        -45deg,
        lighten($backgroundColor, 10%),
        lighten($backgroundColor, 30%),
        lighten($backgroundColor, 20%),
        lighten($backgroundColor, 40%)
      );
    } @else if $theme == 'light' {
      background: linear-gradient(
        -45deg,
        darken($backgroundColor, 10%),
        darken($backgroundColor, 20%),
        darken($backgroundColor, 15%),
        darken($backgroundColor, 25%)
      );
    }
  }
}
</style>
