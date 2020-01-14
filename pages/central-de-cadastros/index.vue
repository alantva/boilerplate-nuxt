<template>
  <div class="wrapper">
    <Label>Área de Cadastros</Label>
    <Label typography="caption">v{{ version }}</Label>
    <div class="links">
      <Button
        @click="$goto('central-de-cadastros-browse')"
        button-design="solid"
        color="secondary"
      >
        Acessar
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CentralDeCadastrosIndex',
  data: () => ({
    version: process.env.version
  })
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.links {
  padding-top: 15px;
}
</style>
