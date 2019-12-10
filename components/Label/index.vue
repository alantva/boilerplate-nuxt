<template>
  <label
    :class="{
      [`label--${color}`]: !!color,
      [`label--${typography}`]: !!typography
    }"
  >
    <!-- @slot Use this slot to place the label content. -->
    <slot></slot>
  </label>
</template>

<script>
import Validators from '../../utils/components/validators'

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
      validator: Validators.colors
    },
    /**
     * Sets the label typography.
     * `(title|subtitle|caption)`
     */
    typography: {
      type: String,
      default: null,
      validator: Validators.typography
    }
  }
}
</script>

<style lang="scss" scoped>
/* Default */
label {
  /** Basic style */
  display: inline-block;
  text-decoration: none;
  transition: color 0.2s ease-in;
  @include basicAnimation(fadeInUp, 0.5s);

  &[for] {
    cursor: pointer;
    user-select: none;
  }
}
/* Color */
@each $theme in $component-themes {
  .theme--#{$theme} {
    label {
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
