<template>
  <div class="wrapper">
    <select
      v-bind="$attrs"
      @input.prevent="handleInput"
      @focus="active = true"
      @blur="active = false"
      @mouseleave="$event.target.blur()"
    >
      <option :value="null">{{ placeholder }}</option>
      <option v-for="(option, i) in options" :key="i" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <Spinner v-if="loading" class="arrow" size="xs"></Spinner>
    <span v-else :class="{ active }" class="arrow">&#9660;</span>
  </div>
</template>

<script>
import Validators from '../../utils/components/validators'

export default {
  /**
   * Select component.
   * @displayName Select
   */
  name: 'Select',
  props: {
    /**
     * Options.
     * [{ value, text }]
     */
    options: {
      type: Array,
      default: () => [],
      validator: Validators.selectOptions
    },
    /**
     * Placeholder.
     */
    placeholder: {
      type: String,
      default: 'Selecione...'
    },
    /**
     * Loading.
     */
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    active: false
  }),
  methods: {
    /**
     * Gets called when the user changes the selected option
     */
    handleInput(e) {
      /**
       * Triggered when select is changed
       * @event input
       * @type {Event}
       */
      return this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  @include basicAnimation(fadeInUp, 0.5s);
  select {
    /** Reset style */
    -webkit-appearance: none; /* Remove estilo padrão do Chrome */
    -moz-appearance: none; /* Remove estilo padrão do FireFox */
    appearance: none; /* Remove estilo padrão do FireFox */
    /** Basic style */
    display: inline-block;
    position: relative;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 35px 10px 10px;
    transition: background-color 0.2s ease-in;
    outline: none;
    user-select: none;
    width: 100%;
    border-width: 1px;
    border-style: solid;
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3px;
    right: 3px;
    height: 30px;
    width: 30px;
    position: absolute;
    user-select: none;
    transition: transform 0.2s ease-in;
    &.active {
      transform: rotate(180deg);
    }
  }
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    .arrow {
      color: t($theme, 'text');
    }
    select {
      &:not(:disabled) {
        color: t($theme, 'on-background');
        background-color: t($theme, 'background');
        border-color: t($theme, 'text');
      }
    }
  }
}
</style>
