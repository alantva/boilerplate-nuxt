<template>
  <span
    :class="{
      [`label--${color}`]: !!color,
      [`label--${typography}`]: !!typography
    }"
  >
    <!-- @slot Use this slot to place the label content. -->
    <slot name="default"></slot>
  </span>
</template>

<script>
export default {
  /**
   * Label component.
   * @displayName Label
   */
  name: 'Label',
  props: {
    /**
     * Sets the label color.
     * `(primary|secondary|error)`
     */
    color: {
      type: String,
      default: null,
      validator: (value) => ['primary', 'secondary', 'error'].includes(value)
    },
    /**
     * Sets the label typography.
     * `(title|subtitle|caption)`
     */
    typography: {
      type: String,
      default: null,
      validator: (value) => ['title', 'subtitle', 'caption'].includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
/* Default */
span {
  /** Basic style */
  display: block;
  text-decoration: none;
  transition: color 0.2s ease-in;
  @include basicAnimation(fadeInUp, 0.5s);
}
/* Color */
@each $theme in $component-themes {
  .theme--#{$theme} {
    span {
      /** Default style */
      color: t($theme, 'text');
      /** Colered style */
      @each $color in $component-colors {
        &.label--#{$color} {
          color: t($theme, $color);
        }
      }
    }
  }
}
/* Typography */
.label {
  &--title {
    font-size: 2rem;
    font-weight: 900;
  }
  &--subtitle {
    font-size: 1.2rem;
    font-weight: 900;
  }
  &--caption {
    font-size: 0.8rem;
  }
}
</style>
