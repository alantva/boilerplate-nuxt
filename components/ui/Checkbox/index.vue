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
     */
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isChecked() {
      return this.value && this.value.includes(this.inputValue)
    }
  },
  methods: {
    /**
     * Gets called when the user check the input
     */
    handleInput(e) {
      const valueSet = new Set(this.value)
      if (e.target.checked) {
        valueSet.add(e.target.value)
      } else {
        valueSet.delete(e.target.value)
      }
      /**
       * Triggered when input is checked
       * @event input
       * @type {Event}
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
