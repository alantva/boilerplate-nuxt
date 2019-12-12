<template>
  <div class="spinner" :class="getClass"></div>
</template>

<script>
import Validator from '../../utils/components/validators'

export default {
  name: 'Spinner',
  props: {
    /**
     * Size.
     * (xs|sm|md|lg|xl)
     */
    size: {
      type: String,
      default: 'md',
      validator: Validator.sizes
    }
  },
  computed: {
    getClass() {
      return { [`spinner--${this.size}`]: true }
    }
  }
}
</script>

<style lang="scss" scoped>
$base-spinner-size: 60px;
$base-spinner-after-size: 48px;
$base-spinner-after-margin: 6px;
$base-spinner-after-border-size: 6px;

$base-spinner-multiplier: (
  xs: 0.5,
  sm: 0.75,
  md: 1,
  lg: 1.25,
  xl: 1.5
);

.spinner {
  display: inline-block;
  @each $size in $component-sizes {
    $multiplier: map-get($base-spinner-multiplier, $size);

    &.spinner--#{$size} {
      width: $base-spinner-size * $multiplier;
      height: $base-spinner-size * $multiplier;
      &:after {
        content: ' ';
        display: block;
        border-radius: 50%;
        animation: spin 1.2s linear infinite;
        width: $base-spinner-after-size * $multiplier;
        height: $base-spinner-after-size * $multiplier;
        margin: $base-spinner-after-margin * $multiplier;
        border: $base-spinner-after-border-size * $multiplier solid #000;
      }
    }
  }
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    .spinner:after {
      $color: t($theme, 'text');
      border-color: $color transparent $color transparent;
    }
  }
}
</style>
