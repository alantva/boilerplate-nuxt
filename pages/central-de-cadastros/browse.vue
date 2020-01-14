<template>
  <div class="wrapper">
    <Label>Área de Cadastros</Label>
    <Autocomplete v-model="searchValue" :options="searchSuggestions" />
    <div class="links">
      <Button
        @click="$goto('central-de-cadastros')"
        button-design="solid"
        color="error"
      >
        Voltar
      </Button>
      <Button
        @click="fetchSearch"
        :disabled="disableSearch"
        button-design="solid"
        color="primary"
      >
        Buscar
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CentralDeCadastrosBrowse',
  data: () => ({
    searchValue: null,
    searchSuggestions: [
      { text: 'AJINOMOTO', value: '000001' },
      { text: 'CECRISA', value: '000002' },
      { text: 'POWERVIEW', value: '000003' },
      { text: 'DASA', value: '000004' }
    ],
    loading: false
  }),
  computed: {
    isSearching() {
      return this.loading
    },
    disableSearch() {
      return !this.searchValue || this.isSearching
    }
  },
  methods: {
    setLoading(value) {
      this.loading = value
    },
    fetchSearch() {
      this.setLoading(true)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setLoading(false)
          resolve()
        }, 1500)
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
  padding-top: 15px;
}
</style>
