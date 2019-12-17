<template>
  <input
    type="radio"
    :checked="isChecked"
    :value="inputValue"
    @input.prevent="handleInput"
  />
</template>

<script>
export default {
  /**
   * Radio component.
   * @displayName Radio
   */
  name: 'Radio',
  props: {
    /**
     * Input value.
     */
    inputValue: {
      type: [Number, String],
      required: true
    },
    /**
     * Model value.
     * @model
     */
    value: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    /**
     * Validates if the radio is active.
     */
    isChecked() {
      return this.inputValue === this.value
    }
  },
  methods: {
    /**
     * Is called when the user change the input.
     * @param {Event} event
     * @public
     */
    handleInput(event) {
      /**
       * Triggered when input is changed.
       * @event input
       * @type {Boolean}
       */
      return this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='radio'] {
  /** Basic style */
  display: inline-block;
  vertical-align: middle;
  transition: background-color 0.2s ease-in;
  outline: none;
  user-select: none;
  @include basicAnimation(fadeInUp, 0.5s);
}
</style>
