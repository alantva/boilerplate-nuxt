<template>
  <div class="theme--light">
    <nuxt />
  </div>
</template>

<style lang="scss">
@each $theme in $themes {
  .theme--#{$theme} {
    background-color: t($theme, 'background');
    color: t($theme, 'on-background');
  }
}
</style>
