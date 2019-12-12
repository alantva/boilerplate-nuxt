This input is amazing, use it responsibly.

### How to use

You can use this input as in this example.

```jsx
<template>
  <div class="theme--light">
    <Label>Customers:</Label>
    <Input v-model="value" fluid :disabled="isDisabled"></Input>
    <Label v-if="value" typography="caption">
      You are typing "{{ value }}"
    </Label>
    <br />
    <Checkbox id="check" v-model="checkValues" input-value="isChecked" />
    <Label for="check" typography="caption">
      Check this option to block input
    </Label>
  </div>
</template>
<script>
export default {
	data: () => ({
    checkValues: [],
    value: ''
  }),
  computed: {
    isDisabled() {
      return this.checkValues.includes('isChecked')
    }
  }
}
</script>
```
