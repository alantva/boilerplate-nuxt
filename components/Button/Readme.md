This button is amazing, use it responsibly.

### Examples

<strong>Color</strong>

```jsx
<div class="theme--light">
  <Button>Default</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="error">Error</Button>
</div>
```

<strong>Solid</strong>

```jsx
<div class="theme--light">
  <Button solid>Default</Button>
  <Button solid color="primary">Primary</Button>
  <Button solid color="secondary">Secondary</Button>
  <Button solid color="error">Error</Button>
</div>
```

<strong>Outlined</strong>

```jsx
<div class="theme--light">
  <Button outlined>Default</Button>
  <Button outlined color="primary">Primary</Button>
  <Button outlined color="secondary">Secondary</Button>
  <Button outlined color="error">Error</Button>
</div>
```

<strong>Solid + Outlined</strong>

```jsx
<div class="theme--light">
  <Button solid outlined>Default</Button>
  <Button solid outlined color="primary">Primary</Button>
  <Button solid outlined color="secondary">Secondary</Button>
  <Button solid outlined color="error">Error</Button>
</div>
```

<strong>Disabled</strong>

```jsx
<div class="theme--light">
  <Button disabled>Default</Button>
  <Button disabled color="primary">Primary</Button>
  <Button disabled color="secondary">Secondary</Button>
  <Button disabled color="error">Error</Button>
</div>
```

### How to use

You can use this button as in this example.

```jsx
<template>
  <div class="theme--light">
    <Button outlined color="primary" @click="counter = 0">
      Reset
    </Button>
    <Button solid :color="getColor" @click="counter++">
      {{ getText }}
    </Button>
  </div>
</template>
<script>
export default {
	data: () => ({
    counter: 0
  }),
  computed: {
    getText() {
      if (this.counter === 0) return 'Hit me!'
      if (this.counter === 1) return 'You\'re so weak!'
      if (this.counter === 2) return 'Ugh!'
      return 'I surrender!'
    },
    getColor() {
      if (this.counter === 0) return 'primary'
      if (this.counter === 1) return 'secondary'
      if (this.counter === 2) return 'error'
      return null
    }
  }
}
</script>
```
