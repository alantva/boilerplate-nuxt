<template>
  <div class="select--wrapper">
    <select
      v-bind="$attrs"
      @change.prevent="$emit('input', $event.target.value)"
      @focus="active = true"
      @blur="active = false"
      @mouseleave="$event.target.blur()"
    >
      <option :value="null">{{ placeholder }}</option>
      <option v-for="(option, i) in options" :key="i" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <i :class="getStatusIcon" />
  </div>
</template>

<script>
import Validators from '../../../utils/components/validators'

export default {
  /**
   * Select component.
   * @displayName Select
   */
  name: 'Select',
  props: {
    /**
     * Model value.
     * @model
     */
    value: {
      type: [Number, String],
      default: null
    },
    /**
     * Options.
     * `[{ value, text }]`
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
  computed: {
    getStatusIcon() {
      return {
        fa: true,
        'fa-chevron-up': this.active && !this.loading,
        'fa-chevron-down': !this.active && !this.loading,
        'fa-spinner fa-spin': this.loading,
        'select--status': true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.select--wrapper {
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
  .select--status {
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
    pointer-events: none;
  }
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    .select--wrapper {
      select {
        &:not(:disabled) {
          color: t($theme, 'on-background');
          background-color: t($theme, 'background');
          border-color: t($theme, 'text');
        }
      }
    }
    .select--status {
      color: t($theme, 'text');
    }
  }
}
</style>
