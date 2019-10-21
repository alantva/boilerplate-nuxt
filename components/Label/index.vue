<template>
  <span
    :class="{
      [`label--${color}`]: !!color,
      [`label--${typography}`]: !!typography
    }"
  >
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
     * `(primary|secondary)`
     */
    color: {
      type: String,
      default: null,
      validator: (value) => ['primary', 'secondary'].includes(value)
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
@import './mixins.scss';

@each $theme in $component-themes {
  .theme--#{$theme} {
    span {
      /** Basic style */
      text-decoration: none;
      transition: color 0.2s ease-in;
      /** Colorless style */
      &:not(.label--primary, .label--secondary) {
        @include label-color($theme, 'on-background');
      }
      /** Colered style */
      @each $color in $component-colors {
        &.label--#{$color} {
          @include label-color($theme, $color);
        }
      }
      &.label--title,
      &.label--subtitle,
      &.label--caption {
        display: block;
      }

      &.label--title {
        font-size: 2rem;
      }

      &.label--subtitle {
        font-size: 1.2rem;
      }

      &.label--caption {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
