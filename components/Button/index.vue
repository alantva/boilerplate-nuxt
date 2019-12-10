<template>
  <button
    type="button"
    :class="{
      [`button--${color}`]: !!color,
      'button--solid': solid,
      'button--outlined': outlined
    }"
    @click="handleClick"
  >
    <!-- @slot Use this slot to place the button content. -->
    <slot></slot>
  </button>
</template>

<script>
import Validators from '../../utils/components/validators'

export default {
  /**
   * Button component.
   * @displayName Button
   */
  name: 'Button',
  props: {
    /**
     * Sets the button color.
     * `(primary|secondary|error)`
     */
    color: {
      type: String,
      default: null,
      validator: Validators.colors
    },
    /**
     * Sets the buttons inherit their colors from the current color applied.
     */
    solid: Boolean,
    /**
     * Sets the buttons inherit their borders from the current color applied.
     */
    outlined: Boolean
  },
  methods: {
    /**
     * Gets called when the user clicks on the button
     */
    handleClick(e) {
      /**
       * Triggered when button is clicked
       * @event click
       * @type {Event}
       */
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './mixins.scss';

/* Default */
button {
  /** Basic style */
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  outline: none;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  &:not(:disabled) {
    @include basicAnimation(fadeInUp, 0.5s);
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
    cursor: pointer;
  }
  &:active {
    position: relative;
    top: 2px;
  }
}
/* Color */
@each $theme in $component-themes {
  .theme--#{$theme} {
    button:not(:disabled) {
      /** Default style */
      @include button-styles($theme, 'text');
      /** Colered style */
      @each $color in $component-colors {
        &.button--#{$color} {
          @include button-styles($theme, $color);
        }
      }
    }
  }
}
</style>
