This select is amazing, use it responsibly.

### How to use

You can use this select as in this example.

```jsx
<template>
  <div class="theme--light">
    <div class="flex">
      <div class="grow">
        <Select
          v-model="selected"
          :options="options"
          :loading="loading"
        />
      </div>
      <div class="grow">
        <Select
          v-model="selected"
          :options="options"
          :loading="loading"
          disabled
        />
      </div>
      <Button @click="search" color="primary">Search</Button>
    </div>
    <br />
    <div v-if="selected">
      <Label typography="caption">
        "The {{ selected }} is selected."
      </Label>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    selected: null,
    loading: false,
    options: [
      { value: 1, text: 'Option 1' },
      { value: 2, text: 'Option 2' },
      { value: 3, text: 'Option 3' },
      { value: 4, text: 'Option 4' },
      { value: 5, text: 'Option 5' }
    ]
  }),
  methods: {
    search() {
      this.loading = true
      setTimeout(() => (this.loading = false), 1500)
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
