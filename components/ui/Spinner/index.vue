<template>
  <div class="spinner" :class="getClasses"></div>
</template>

<script>
import Validators from '../../../utils/components/validators'

export default {
  name: 'Spinner',
  props: {
    /**
     * Sets the spinner color.
     * `(primary|secondary|error)`
     */
    color: {
      type: String,
      default: null,
      validator: Validators.colors
    },
    /**
     * Sets the spinner size.
     * (xs | sm | md | lg | xl)
     */
    size: {
      type: String,
      default: 'md',
      validator: Validators.sizes
    }
  },
  computed: {
    getClasses() {
      return {
        [`spinner--${this.size}`]: true,
        ...(this.color ? { [`spinner--${this.color}`]: true } : null)
      }
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
    /** Default style */
    .spinner:after {
      $color: t($theme, 'text');
      border-color: $color transparent $color transparent;
    }
    /** Colered style */
    @each $color in $component-colors {
      .spinner--#{$color}:after {
        $border-color: t($theme, $color);
        border-color: $border-color transparent $border-color transparent;
      }
    }
  }
}
</style>
