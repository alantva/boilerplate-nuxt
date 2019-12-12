This radio is amazing, use it responsibly.

### How to use

You can use this radio as in this example.

```jsx
<template>
  <div class="theme--light">
    <div>
      <Radio id="radio-1" v-model="radioValues" input-value="first" />
      <Label for="radio-1" typography="caption">
        Select the first radio
      </Label>
    </div>
    <div>
      <Radio id="radio-2" v-model="radioValues" input-value="second" />
      <Label for="radio-2" typography="caption">
        Select the second radio
      </Label>
    </div>
    <div>
      <Radio id="radio-3" v-model="radioValues" input-value="third" disabled />
      <Label for="radio-3" typography="caption">
        And you can't select this last radio
      </Label>
    </div>
    <br />
    <div>
      <Label typography="caption">
        "The {{ radioValues }} radio is selected."
      </Label>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    radioValues: 'first'
  })
}
</script>
```
