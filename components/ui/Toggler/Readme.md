This toggler is amazing, use it responsibly.

### Examples

<strong>Theme</strong>

```jsx
<template>
  <div class="container">
    <div class="theme--dark">
      <Toggler v-model="toggleDark"></Toggler>
    </div>
    <div class="theme--light">
      <Toggler v-model="toggleLight"></Toggler>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    toggleDark: true,
    toggleLight: true
  })
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-evenly;
}
</style>
```

### How to use

You can use this toggler as in this example.

```jsx
<template>
  <div class="theme--light">
    <div class="wrapper">
      <Label :color="!toggle ? 'error' : null">Desligado</Label>
      <Toggler v-model="toggle"></Toggler>
      <Label :color="toggle ? 'primary' : null">Ligado</Label>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    toggle: false
  })
}
</script>
<style>
.wrapper {
  display: flex;
  width: 180px;
  justify-content: space-between;
}
</style>
```
