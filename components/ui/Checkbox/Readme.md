This checkbox is amazing, use it responsibly.

### How to use

You can use this checkbox as in this example.

```jsx
<template>
  <div class="theme--light">
    <div class="box">
      <Checkbox id="check-1" v-model="checkValues" inputValue="first" />
      <Label for="check-1" class="box" typography="caption">
        Check this option
      </Label>
    </div>
    <div class="box">
      <Checkbox id="check-2" v-model="checkValues" inputValue="second" />
      <Label for="check-2" class="box" typography="caption">
        Check this other option
      </Label>
    </div>
    <div class="box">
      <Checkbox id="check-3" v-model="checkValues" inputValue="third" disabled />
      <Label for="check-3" class="box" typography="caption">
        And you can't check this last option
      </Label>
    </div>
    <br />
    <div>
      <Label v-if="checkValues.length" typography="caption">
        "Selected: {{ checkValues.join(' and ') }}."
      </Label>
      <Label v-else typography="caption">
        "There's no check selected."
      </Label>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    checkValues: []
  })
}
</script>
```
