This input is amazing, use it responsibly.

### How to use

You can use this input as in this example.

```jsx
<template>
  <div class="theme--light">
    <Label>Customers:</Label>
    <Input v-model="value" fluid :disabled="disabled"></Input>
    <Label v-if="value" typography="caption">
      You are typing "{{ value }}"
    </Label>
    <Label class="checkbox-disable" typography="caption">
      <input v-model="disabled" type="checkbox" />
      Check this option to block input
    </Label>
  </div>
</template>
<script>
export default {
	data: () => ({
    disabled: false,
    value: ''
  })
}
</script>
<style>
.checkbox-disable {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
```
