This autocomplete is amazing, use it responsibly.

### How to use

You can use this autocomplete as in this example.

```jsx
<template>
  <div class="theme--light">
    <div class="flex">
      <div class="grow">
        <Autocomplete
          v-model="value"
          :options="suggestions"
          :loading="isLoading"
          @search="searchAction"
        />
      </div>
      <div class="grow">
        <Autocomplete disabled />
      </div>
    </div>
    <Label v-if="value" typography="caption">
      Você selecionou "{{ value.text }}"
    </Label>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: null,
    isLoading: false,
    interval: null,
    suggestions: [
      { text: 'Argentina', value: 'AR' },
      { text: 'Bolívia', value: 'BO' },
      { text: 'Brasil', value: 'BR' },
      { text: 'Chile', value: 'CH' },
      { text: 'Colômbia', value: 'CO' },
      { text: 'Equador', value: 'EQ' },
      { text: 'Guiana', value: 'GU' },
      { text: 'Paraguai', value: 'PA' },
      { text: 'Peru', value: 'PE' },
      { text: 'Suriname', value: 'SU' },
      { text: 'Uruguai', value: 'UR' },
      { text: 'Venezuela', value: 'VE' }
    ]
  }),
  methods: {
    searchAction() {
      this.isLoading = true
      clearInterval(this.interval)
      this.interval = setInterval(() => (this.isLoading = false), 1500)
    }
  }
}
</script>
<style>
.flex {
  display: flex;
}
.grow {
  flex-grow: 1;
  margin-right: 10px;
}
</style>
```
