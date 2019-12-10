<template>
  <input type="checkbox" :disabled="disabled" @input.prevent="handleInput" />
</template>

<script>
export default {
  /**
   * Checkbox component.
   * @displayName Checkbox
   */
  name: 'Checkbox',
  props: {
    /**
     * Disable the checkbox.
     */
    disabled: Boolean
  },
  methods: {
    /**
     * Gets called when the user check the input
     */
    handleInput(e) {
      /**
       * Triggered when input is checked
       * @event input
       * @type {Event}
       */
      return this.$emit('input', e.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  /** Basic style */
  display: inline-block;
  vertical-align: middle;
  transition: background-color 0.2s ease-in;
  outline: none;
  user-select: none;
  @include basicAnimation(fadeInUp, 0.5s);
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    input[type='checkbox'] {
      &:not(:disabled) {
        color: t($theme, 'on-background');
      }
    }
  }
}
</style>
