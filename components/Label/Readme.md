This label is amazing, use it responsibly.

### Examples

<strong>Color</strong>

```jsx
<div class="theme--light">
  <Label>Default</Label>
  <br />
  <Label color="primary">Primary</Label>
  <br />
  <Label color="secondary">Secondary</Label>
</div>
```

<strong>Typography</strong>

```jsx
<div class="theme--light">
  <Label typography="title">Title</Label>
  <Label typography="subtitle">Subtitle</Label>
  <Label typography="caption">Caption</Label>
</div>
```

### How to use

You can use this label as in this example.

```jsx
<template>
  <div class="theme--light">
    <div class="wrapper">
      <Label typography="title">{{ title }}</Label>
      <Label typography="caption">{{ caption }}</Label>
    </div>
    <div class="wrapper">
      <Label typography="subtitle">{{ subtitle }}</Label>
      <Label>{{ text }}</Label>
    </div>
  </div>
</template>
<script>
export default {
	data: () => ({
    title: 'This is a title',
    caption: 'and this a caption!',
    subtitle: 'This is a subtitle',
    text: 'and this is a simple text!'
  })
}
</script>
<style>
.wrapper {
  margin: 10px;
}
</style>
```
