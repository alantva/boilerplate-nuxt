<template>
  <div :class="theme">
    <div class="themes-links">
      <Button color="primary" @click="theme = 'theme--dark'">
        Dark
      </Button>
      <Button color="secondary" @click="theme = 'theme--light'">
        Light
      </Button>
    </div>
    <nuxt />
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  components: {
    Button
  },
  data: () => ({ theme: 'theme--dark' })
}
</script>

<style lang="scss" scoped>
.themes-links {
  position: absolute;
  margin: 15px;
}

@each $theme in $component-themes {
  .theme--#{$theme} {
    background-color: t($theme, 'background');
    color: t($theme, 'on-background');
  }
}
</style>
