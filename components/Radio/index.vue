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
     */
    value: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    isChecked() {
      return this.inputValue === this.value
    }
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
      return this.$emit('input', e.target.value)
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
