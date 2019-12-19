<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  /**
   * Box component.
   * @displayName Box
   */
  name: 'Box'
}
</script>

<style lang="scss" scoped>
@each $theme in $component-themes {
  .theme--#{$theme} {
    .box {
      /* Basic Style */
      $backgroundColor: t($theme, 'background');
      border-bottom-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 50px 15px;
      @include basicAnimation(fadeInUp, 0.5s);
      /* Theme Style */
      @if $theme == 'dark' {
        background: linear-gradient(
          45deg,
          lighten($backgroundColor, 20%),
          lighten($backgroundColor, 40%) 30px,
          lighten($backgroundColor, 40%) calc(100% - 30px),
          lighten($backgroundColor, 20%)
        );
      } @else if $theme == 'light' {
        background: linear-gradient(
          45deg,
          darken($backgroundColor, 25%),
          darken($backgroundColor, 10%) 30px,
          darken($backgroundColor, 10%) calc(100% - 30px),
          darken($backgroundColor, 25%)
        );
      }
    }
  }
}
</style>
