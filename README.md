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

## Deploy in GitHub

``` bash
# generate static project for gh-pages
$ yarn generate:gh-pages

# push the dist repository
$ git add dist -f
$ git commit -n -m "Deploying to gh-pages"
$ git push origin master

# deploy to gh-pages
$ yarn deploy:gh-pages

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

# Theme

There are currently two themes for the application, where components inherit their colors based on each.

### Dark Theme
```scss
$dark-theme: (
  primary: #bb86fc,
  secondary: #03dac6,
  background: #121212,
  text: #777777,
  error: #cf6679,
  on-primary: #000000,
  on-secondary: #000000,
  on-background: #ffffff,
  on-text: #d3d3d3,
  on-error: #000000
);
```
### Light Theme
```scss
$light-theme: (
  primary: #6200ee,
  secondary: #03dac6,
  background: #ffffff,
  text: #777777,
  error: #b00020,
  on-primary: #ffffff,
  on-secondary: #ffffff,
  on-background: #526488,
  on-text: #d3d3d3,
  on-error: #ffffff
);
```

## Theming

The theme must be configured in the following [file](assets/scss/variables/theme.scss).

To add a new theme, you must add the theme name to the following array:
```scss
$component-themes: ('light', 'dark');
```

And add all the properties:
- `primary`: _main color for the application._
- `secondary`: _secondary color for the application._
- `background`: _background color for the application._
- `text`: _text color for components._
- `error`: _error color for the application._
- `on-primary`: _main reverse color for the application._
- `on-secondary`: _secondary reverse color for the application._
- `on-background`: _background reverse color for the application._
- `on-text`: _text reverse color for components._
- `on-error`: _error reverse color for the application._

In the array:
```scss
$theme-list: (dark: $dark-theme, light: $light-theme);
```

## Changing Theme

The current theme control is based on a top `<div>` that is controlled by the theme class.

This control is currently located in the file: [layouts/default.vue](/layouts/default.vue)

# Components

## UI

- [Autocomplete](/components/ui/Autocomplete)
- [Box](/components/ui/Box)
- [Button](/components/ui/Button)
- [Checkbox](/components/ui/Checkbox)
- [Input](/components/ui/Input)
- [Label](/components/ui/Label)
- [Radio](/components/ui/Radio)
- [Select](/components/ui/Select)
- [Spinner](/components/ui/Spinner)

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
> Important!
> 1. Create a [single file component](https://br.vuejs.org/v2/guide/single-file-components.html).
> 2. Use [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to generate documentation.
> 3. Create tests for component [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-jest.html).

## Example

```html
<!-- index.vue -->

<template>
  <div>
    <slot></slot>
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
