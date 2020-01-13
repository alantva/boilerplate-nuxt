const fnOption = (item) =>
  item.hasOwnProperty('value') && item.hasOwnProperty('text')

export default {
  autocompleteOption: fnOption,

  autocompleteOptions: (items) =>
    items.filter(fnOption).length === items.length,

  buttonDesign: (value) => ['solid', 'outlined'].includes(value),

  colors: (value) => ['primary', 'secondary', 'error'].includes(value),

  selectOptions: (items) => items.filter(fnOption).length === items.length,

  typography: (value) => ['title', 'subtitle', 'caption'].includes(value)
}
