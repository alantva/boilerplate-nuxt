# Introduction

My boilerplate for a Nuxt.js project.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Setup

``` bash
# install dependencies
$ yarn
```

## Development Setup

``` bash
# serve with hot reload at localhost:3000
$ yarn dev
```

## Production Setup

``` bash
# build for production and launch server
$ yarn build
$ yarn start

# or

# generate static project
$ yarn generate
```

## Useful scripts 


``` bash
# run tests
$ yarn test

# run eslint
$ yarn lint

# run docs
$ yarn styleguide
# build docs
$ yarn styleguide:build

```

# Components

- [Button](/components/Button)
- [Label](/components/Label)

## How to create a component?

```bash
# enter the components directory
$ cd components/

# create a new directory for the component
$ mkdir {ComponentName}
$ cd {ComponentName}/

# create component file
$ touch index.vue
# create component documentation file
$ touch Readme.md
# create component test file
$ touch {ComponentName}.spec.js
```
<span style="color: red; font-size: 2rem">Important!</span>

1. Create a [single file component](https://br.vuejs.org/v2/guide/single-file-components.html).
2. Use [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to generate documentation.
3. Create tests for component [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-jest.html).

## Example

```html
<!-- index.vue -->

<template>
  <div>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  /**
   * {ComponentName} component.
   * @displayName {ComponentName}
   */
  name: '{ComponentName}'
}
</script>

<style lang="scss" scoped>
@each $theme in $component-themes {
  .theme--#{$theme} {
    div {
      font-size: 16px;
    }
  }
}
</style>
```

```html
<!-- Readme.md -->

This {ComponentName} is amazing, use it responsibly.

...
```

```js
/** {ComponentName}.spec.js */

import { mount } from '@vue/test-utils'
import `{ComponentName}` from './index.vue'

describe('`{ComponentName}`', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(`{ComponentName}`)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
})
```

# License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Alan Timossi Farias de Oliveira
