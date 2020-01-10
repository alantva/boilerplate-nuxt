<template>
  <input
    :checked="isChecked"
    :value="inputValue"
    @input.prevent="$emit('input', $event.target.value)"
    type="radio"
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
