<template>
  <div @click="handleInput" class="toggler">
    <span :class="getPinClass" />
    <span class="toggler--base"></span>
  </div>
</template>

<script>
export default {
  /**
   * Toggler component.
   * @displayName Toggler
   */
  name: 'Toggler',
  props: {
    /**
     * Model value.
     * @model
     */
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getPinClass() {
      return {
        'toggler--pin': true,
        'toggler--pin-active': this.value
      }
    }
  },
  methods: {
    handleInput() {
      /**
       * Triggered when the toggle is changed.
       * @event input
       * @type {Boolean}
       */
      return this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radius: 10px;
$width: 20px;
$height: 20px;

.toggler {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: $width * 2;
  height: $height;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
  cursor: pointer;
  @include basicAnimation(fadeInUp, 0.5s);

  &--pin {
    display: flex;
    position: absolute;
    width: $width;
    height: $height;
    -webkit-border-radius: $border-radius;
    -moz-border-radius: $border-radius;
    border-radius: $border-radius;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
    z-index: 1;
    transition: left 0.1s ease-in, background-color 0.2s ease-in;
    left: 0;
    &-active {
      left: $width;
    }
  }

  &--base {
    display: flex;
    position: relative;
    width: calc(#{$width} * 2 - 2px);
    height: calc(#{$height} - 2px);
    -webkit-border-radius: $border-radius;
    -moz-border-radius: $border-radius;
    border-radius: $border-radius;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
  }
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    .toggler {
      &--pin {
        background-color: t($theme, 'text');
        &-active {
          box-shadow: 0 0 3px t($theme, 'on-text');
          background-color: t($theme, 'primary');
        }
      }
      &--base {
        box-shadow: 0 0 2px inset t($theme, 'text');
        background-color: t($theme, 'background');
      }
    }
  }
}
</style>
