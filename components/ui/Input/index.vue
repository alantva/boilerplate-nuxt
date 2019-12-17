<template>
  <input type="text" @input.prevent="handleInput" />
</template>

<script>
export default {
  /**
   * Input component.
   * @displayName Input
   */
  name: 'Input',
  props: {
    /**
     * Model value.
     * @model
     */
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    /**
     * Is called when the user types on the input.
     * @param {Event} event
     * @public
     */
    handleInput(event) {
      /**
       * Triggered when input is typed
       * @event input
       * @type {Boolean}
       */
      return this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  /** Basic style */
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  outline: none;
  user-select: none;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  @include basicAnimation(fadeInUp, 0.5s);
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    input[type='text'] {
      &:not(:disabled) {
        color: t($theme, 'on-background');
        background-color: t($theme, 'background');
        border-color: t($theme, 'text');
      }
    }
  }
}
</style>
