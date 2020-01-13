<template>
  <div @click.stop class="autocomplete--wrapper">
    <Input
      :value="search"
      v-bind="$attrs"
      :placeholder="placeholder"
      @input="searchAction"
      @keydown.native="controlEvents"
      @click.native="openAction"
      @focus.native="openAction"
      class="autocomplete--input"
    />
    <i :class="getStatusIcon" />
    <i
      v-if="selected"
      @click="clearAction"
      class="fa fa-times autocomplete--clear"
    />
    <div v-if="isOpenToType" class="autocomplete--options">
      <div class="autocomplete--options-list">
        <div
          v-for="(option, i) in getOptions"
          :key="i"
          :class="{
            'autocomplete--option': true,
            'autocomplete--selected': !isNotSelected(option)
          }"
          @click="selectedAction(option)"
        >
          <!--
            @slot Use this slot to place the option content.
            @binding option Autocomplete option {text, value}.
            -->
          <slot v-bind="option" name="option">
            {{ option.text }}
          </slot>
        </div>
        <div v-if="noResultsFound" class="autocomplete--no-results">
          <!--
            @slot Use this slot to a content when no results were found.
            -->
          <slot name="no-results">
            Não foram encontrados resultados para sua pesquisa...
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Validators from '../../../utils/components/validators'

export default {
  /**
   * Autocomplete component.
   * @displayName Autocomplete
   */
  name: 'Autocomplete',
  inheritAttrs: false,
  props: {
    /**
     * Model value.
     * @model
     */
    value: {
      type: Object,
      default: null,
      validator: Validators.autocompleteOption
    },
    /**
     * Options.
     * `[{ value, text }]`
     */
    options: {
      type: Array,
      default: () => [],
      validator: Validators.autocompleteOptions
    },
    /**
     * Placeholder.
     */
    placeholder: {
      type: String,
      default: 'Pesquisar...'
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
    search: '',
    selected: null,
    open: false
  }),
  computed: {
    getStatusIcon() {
      return {
        fa: true,
        'fa-search': !this.isOpenToType && !this.isLoading,
        'fa-keyboard-o': this.isOpenToType,
        'fa-spinner fa-spin': this.isLoading,
        'autocomplete--status': true
      }
    },
    getOptions() {
      return this.search ? this.findSuggestions() : this.options
    },
    isOpenToType() {
      return !this.isLoading && this.open
    },
    isLoading() {
      return this.loading
    },
    noResultsFound() {
      return this.getOptions.length === 0
    }
  },
  mounted() {
    document.body.addEventListener('click', this.closeAction, false)
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.closeAction)
  },
  methods: {
    capitalize(string) {
      return string.charAt(0) + string.slice(1)
    },
    escapeAction() {
      this.setSearchAsSelectedText()
    },
    controlEvents(e) {
      const fnName = this.capitalize(e.code + 'Action')
      const fn = this[fnName]
      if (typeof fn === 'function') {
        e.preventDefault()
        fn(e)
      }
    },
    isNotSelected(option) {
      return !(this.selected && this.selected.value === option.value)
    },
    selectedAction(option) {
      const nOption = this.isNotSelected(option) ? option : null
      this.selected = nOption
      this.closeAction()
      this.setSearchAsSelectedText()
      this.emitSelected()
    },
    searchAction(text) {
      this.search = text
      this.emitSearch()
    },
    openAction() {
      this.open = true
      this.setSearchAsSelectedText()
    },
    clearAction() {
      this.selected = null
      this.search = ''
      this.emitSelected()
    },
    closeAction() {
      this.open = false
      this.setSearchAsSelectedText()
    },
    setSearchAsSelectedText() {
      if (this.selected) this.search = this.selected.text
    },
    findSuggestions() {
      const searchLower = this.search.toLowerCase()
      return this.options.filter((option) =>
        option.text.toLowerCase().includes(searchLower)
      )
    },
    emitSearch() {
      /**
       * Triggered when the search is changed.
       * @event search
       * @type {String}
       */
      return this.$emit('search', this.search)
    },
    emitSelected() {
      /**
       * Triggered when a selection is changed.
       * @event input
       * @type {Object}
       */
      return this.$emit('input', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.autocomplete {
  &--wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    @include basicAnimation(fadeInUp, 0.5s);
  }
  &--input {
    padding: 10px 60px 10px 10px !important;
  }
  /** List style */
  &--options {
    position: absolute;
    overflow-x: hidden;
    z-index: 20;
    max-height: 200px;
    width: 100%;
    border-radius: 4px;
    @include basicAnimation(fadeInUp, 0.2s);
    &--list {
      position: relative;
    }
  }
  &--option {
    padding: 5px 10px;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.1s ease-in, color 0.1s ease-in;
  }
  &--no-results {
    padding: 10px;
  }
  &--status,
  &--clear {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3px;
    height: 30px;
    width: 30px;
    position: absolute;
    user-select: none;
    transition: transform 0.2s ease-in;
  }
  &--status {
    right: 3px;
    pointer-events: none;
  }
  &--clear {
    cursor: pointer;
    right: 28px;
  }
}
@each $theme in $component-themes {
  .theme--#{$theme} {
    .autocomplete {
      &--input {
        &:not(:disabled) {
          color: t($theme, 'on-background');
          background-color: t($theme, 'background');
          border-color: t($theme, 'text');
        }
      }
      &--options {
        box-shadow: 0 0 3px t($theme, 'on-background');
        background-color: lighten(t($theme, 'background'), 10%);
      }
      &--option {
        &:hover {
          color: t($theme, 'text');
          background-color: t($theme, 'on-text');
        }
        &.autocomplete--selected {
          color: t($theme, 'background');
          background-color: t($theme, 'on-background');
        }
      }
      &--status,
      &--clear {
        color: t($theme, 'text');
      }
    }
  }
}
</style>
