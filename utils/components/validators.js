export default {
  colors: (value) => ['primary', 'secondary', 'error'].includes(value),

  selectOptions: (items) =>
    items.filter(
      (item) => item.hasOwnProperty('value') && item.hasOwnProperty('text')
    ).length === items.length,

  sizes: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),

  typography: (value) => ['title', 'subtitle', 'caption'].includes(value)
}
