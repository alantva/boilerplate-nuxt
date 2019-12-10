This input is amazing, use it responsibly.

### How to use

You can use this input as in this example.

```jsx
<template>
  <div class="theme--light">
    <Label>Customers:</Label>
    <Input v-model="value" fluid :disabled="check"></Input>
    <Label v-if="value" typography="caption">
      You are typing "{{ value }}"
    </Label>
    <br />
    <Checkbox id="check" v-model="check"></Checkbox>
    <Label for="check" typography="caption">
      Check this option to block input
    </Label>
  </div>
</template>
<script>
export default {
	data: () => ({
    check: false,
    value: ''
  })
}
</script>
```
