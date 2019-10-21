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
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  /**
   * Button component.
   * @displayName Button
   */
  name: 'Button',
  props: {
    /**
     * Sets the button color.
     * `(primary|secondary)`
     */
    color: {
      type: String,
      default: null
    },
    /**
     * Sets the buttons inherit their colors from the current color applied.
     */
    solid: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the outlined buttons inherit their borders from the current color applied.
     */
    outlined: {
      type: Boolean,
      default: false
    }
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
      return this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './mixins.scss';

@each $theme in $component-themes {
  .theme--#{$theme} {
    button {
      /** Basic style */
      display: inline-block;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      padding: 10px 30px;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      outline: none;
      border-width: 1px;
      border-style: solid;
      /** Colorless style */
      &:not(.button--primary, .button--secondary) {
        @include button-color($theme, 'colorless');
        @include button-outlined($theme, 'colorless');
        @include button-solid($theme, 'colorless');
      }
      /** Colered style */
      @each $color in $component-colors {
        &.button--#{$color} {
          @include button-color($theme, $color);
          @include button-outlined($theme, $color);
          @include button-solid($theme, $color);
        }
      }
    }
  }
}
</style>
