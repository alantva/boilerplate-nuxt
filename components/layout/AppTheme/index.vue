<template>
  <div class="theme-links--wrapper">
    <Button
      v-bind="getButtonAttrs('dark')"
      color="primary"
      @click="handleInput('dark')"
    >
      Dark
    </Button>
    <Button
      v-bind="getButtonAttrs('light')"
      color="secondary"
      @click="handleInput('light')"
    >
      Light
    </Button>
  </div>
</template>

<script>
export default {
  /**
   * AppTheme component.
   * @displayName AppTheme
   */
  name: 'AppTheme',
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
     * Get the button attrs based on theme.
     * @param {String} theme
     * @public
     */
    getButtonAttrs(theme) {
      return {
        buttonDesign: this.isThemeActive(theme) ? 'outlined' : null
      }
    },
    /**
     * Validates if the theme is active.
     * @param {String} theme
     * @public
     */
    isThemeActive(theme) {
      return this.value === theme
    },
    /**
     * Is called when the user changes the theme.
     * @param {String} theme
     * @public
     */
    handleInput(theme) {
      /**
       * Triggered when the user changes the theme.
       * @event input
       * @type {String}
       */
      return this.$emit('input', theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-links--wrapper {
  position: absolute;
  margin: 15px;
}
</style>
