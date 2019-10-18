<template>
  <button
    type="button"
    :class="{
      [`button--${color}`]: true,
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
     * Sets the  button color.
     */
    color: {
      type: String,
      default: 'primary'
    },
    /**
     * Outlined buttons inherit their borders from the current color applied.
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
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin border($theme, $color) {
  border: 1px solid t($theme, 'on-' + $color);
}

@mixin outline($theme, $color) {
  color: t($theme, $color);
  background-color: t($theme, 'on-' + $color);
}

@mixin solid($theme, $color) {
  color: t($theme, 'on-' + $color);
  background-color: t($theme, $color);
}

@each $theme in $themes {
  .theme--#{$theme} {
    @each $color in $component-colors {
      .button--#{$color} {
        display: inline-block;
        border-radius: 4px;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        padding: 10px 30px;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
        border: 1px solid t($theme, $color);

        &:not(.button--outlined) {
          @include solid($theme, $color);
          &:hover,
          &:active {
            @include outline($theme, $color);
          }
          &:active {
            @include border($theme, $color);
          }
        }

        &.button--outlined {
          @include outline($theme, $color);
          &:hover,
          &:active {
            @include solid($theme, $color);
          }
          &:active {
            @include border($theme, $color);
          }
        }
      }
    }
  }
}
</style>
