import Validators from './validators'

describe('Validators', () => {
  const trueColors = ['primary', 'secondary', 'error']
  const falseColors = ['not-primary', 'not-secondary', 'not-error']

  describe('Colors', () => {
    trueColors.forEach((color) => {
      test(`"${color}" must be truthy`, () => {
        expect(Validators.colors(color)).toBeTruthy()
      })
    })
    falseColors.forEach((color) => {
      test(`"${color}" must be falsy`, () => {
        expect(Validators.colors(color)).toBeFalsy()
      })
    })
  })

  const trueTypography = ['title', 'subtitle', 'caption']
  const falseTypography = ['not-title', 'not-subtitle', 'not-caption']

  describe('Typography', () => {
    trueTypography.forEach((typography) => {
      test(`"${typography}" must be truthy`, () => {
        expect(Validators.typography(typography)).toBeTruthy()
      })
    })
    falseTypography.forEach((typography) => {
      test(`"${typography}" must be falsy`, () => {
        expect(Validators.typography(typography)).toBeFalsy()
      })
    })
  })
})
