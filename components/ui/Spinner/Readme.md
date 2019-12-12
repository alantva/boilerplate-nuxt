This spinner is amazing, use it responsibly.

### Examples

<strong>Size</strong>

```jsx
<div class="theme--light">
  <Spinner size="xs"></Spinner>
  <Spinner size="sm"></Spinner>
  <Spinner></Spinner>
  <Spinner size="lg"></Spinner>
  <Spinner size="xl"></Spinner>
</div>
```

<strong>Color</strong>

```jsx
<div>
  <div class="theme--dark">
    <Spinner></Spinner>
    <Spinner color="primary"></Spinner>
    <Spinner color="secondary"></Spinner>
    <Spinner color="error"></Spinner>
  </div>
  <div class="theme--light">
    <Spinner></Spinner>
    <Spinner color="primary"></Spinner>
    <Spinner color="secondary"></Spinner>
    <Spinner color="error"></Spinner>
  </div>
</div>
```

### How to use

You can use this spinner as in this example.

```jsx
<template>
  <div class="theme--light">
    <div class="wrapper">
      <Spinner></Spinner>
      <Label>Carregando</Label>
    </div>
  </div>
</template>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
```
