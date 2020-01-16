<template>
  <div class="wrapper">
    <Label>Área de Cadastros</Label>
    <Autocomplete
      v-model="searchValue"
      :options="searchSuggestions"
      @search="fetchSearch"
    />
    <div class="links">
      <Button
        @click="$goto('central-de-cadastros')"
        :disabled="isSearching"
        button-design="solid"
        color="error"
      >
        Voltar
      </Button>
      <Button
        @click="$goto('central-de-cadastros')"
        :disabled="disableNext"
        button-design="solid"
        color="primary"
      >
        Avançar
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CentralDeCadastrosBrowse',
  data: () => ({
    searchValue: null,
    searchSuggestions: [],
    searchLoading: false
  }),
  computed: {
    isSearching() {
      return this.searchLoading
    },
    disableNext() {
      return !this.searchValue || this.isSearching
    }
  },
  methods: {
    fetchSearch() {
      this.searchLoading = true
      return this.$axios
        .$get('/api/economic-groups')
        .then((data) => {
          this.searchSuggestions = data
        })
        .catch(() => {
          this.searchSuggestions = []
        })
        .finally(() => {
          this.searchLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.links {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    > button:not(:first-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
