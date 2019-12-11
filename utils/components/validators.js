const colors = (value) => ['primary', 'secondary', 'error'].includes(value)

const typography = (value) => ['title', 'subtitle', 'caption'].includes(value)

const selectOptions = (items) =>
  items.filter(
    (item) => item.hasOwnProperty('value') && item.hasOwnProperty('text')
  ).length === items.length

export default { colors, typography, selectOptions }
