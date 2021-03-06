<template>
  <button :class="getButtonClass" @click="$emit('click', $event)" type="button">
    <!-- @slot Use this slot to place the button content. -->
    <slot></slot>
  </button>
</template>

<script>
import Validators from '../../../utils/components/validators'

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
     * Sets the button design.
     * `(solid|outlined)`
     */
    buttonDesign: {
      type: String,
      default: null,
      validator: Validators.buttonDesign
    }
  },
  computed: {
    /**
     * Returns the classes the button should receive.
     */
    getButtonClass() {
      return {
        [`button--${this.color}`]: !!this.color,
        [`button--${this.buttonDesign}`]: !!this.buttonDesign
      }
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
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  @include basicAnimation(fadeInUp, 0.5s);
  &:not(:disabled) {
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
      @include button-design($theme, 'text');
      /** Colered style */
      @each $color in $component-colors {
        &.button--#{$color} {
          @include button-design($theme, $color);
        }
      }
    }
  }
}
</style>
