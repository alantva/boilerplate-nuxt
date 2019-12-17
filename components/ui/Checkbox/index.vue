<template>
  <input
    type="checkbox"
    :checked="isChecked"
    :value="inputValue"
    @input.prevent="handleInput"
  />
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
      type: Array,
      default: () => []
    }
  },
  computed: {
    /**
     * Validates if the checkbox is active.
     */
    isChecked() {
      return this.value && this.value.includes(this.inputValue)
    }
  },
  methods: {
    /**
     * Is called when the user change the input.
     * @param {Event} event
     * @public
     */
    handleInput(event) {
      const valueSet = new Set(this.value)
      if (event.target.checked) {
        valueSet.add(event.target.value)
      } else {
        valueSet.delete(event.target.value)
      }
      /**
       * Triggered when input is changed.
       * @event input
       * @type {Array}
       */
      return this.$emit('input', Array.from(valueSet))
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
</style>
