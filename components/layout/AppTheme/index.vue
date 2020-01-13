<template>
  <div class="theme-links--wrapper">
    <Button @click="handleInput" color="primary" button-design="outlined">
      <i :class="getIconClasses" />
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
  computed: {
    getIconClasses() {
      return {
        fa: true,
        'fa-moon-o': this.isThemeActive('dark'),
        'fa-sun-o': this.isThemeActive('light')
      }
    }
  },
  methods: {
    /**
     * Validates if the theme is active.
     * @param {String} theme
     */
    isThemeActive(theme) {
      return this.value === theme
    },
    /**
     * Handle theme change.
     * @param {String} theme
     */
    handleInput() {
      let nTheme = 'light'
      if (this.value === 'light') {
        nTheme = 'dark'
      }
      /**
       * Triggered when the user changes the theme.
       * @event input
       * @type {String}
       */
      return this.$emit('input', nTheme)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-links--wrapper {
  position: absolute;
  margin-top: 15px;
  right: 15px;
}
</style>
