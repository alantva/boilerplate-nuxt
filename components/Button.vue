<template>
  <button type="button">
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  .theme--#{$theme} {
    @each $c in ('primary', 'secondary') {
      .button--#{$c} {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid t($theme, $c);
        color: t($theme, $c);
        text-decoration: none;
        cursor: pointer;
        outline: none;
        padding: 10px 30px;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;

        &:hover,
        &:active {
          color: t($theme, 'on-' + $c);
          background-color: t($theme, $c);
        }

        &:active {
          border: 1px solid t($theme, 'on-' + $c);
        }
      }
    }
  }
}
</style>
