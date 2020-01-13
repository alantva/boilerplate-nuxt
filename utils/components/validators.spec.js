import Validators from './validators'

describe('Validators', () => {
  /** ButtonDesign */
  const trueButtonDesign = ['solid', 'outlined']
  const falseButtonDesign = ['not-solid', 'not-outlined']
  describe('ButtonDesign', () => {
    trueButtonDesign.forEach((design) => {
      test(`"${design}" must be truthy`, () => {
        expect(Validators.buttonDesign(design)).toBeTruthy()
      })
    })
    falseButtonDesign.forEach((design) => {
      test(`"${design}" must be falsy`, () => {
        expect(Validators.buttonDesign(design)).toBeFalsy()
      })
    })
  })
  /** Colors */
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
  /** AutocompleteOptions and SelectOptions */
  const trueSelectOptions = [
    [{ value: 1, text: "It's a test!" }],
    [
      { value: 1, text: "It's a test!" },
      { value: 2, text: "It's a test too!" }
    ]
  ]
  const falseSelectOptions = [
    [{ id: 1, text: "It's a test!" }],
    [{ value: 1, description: "It's a test!" }],
    [{ value: 1 }],
    [{ text: "It's a test!" }]
  ]
  describe('SelectOptions', () => {
    trueSelectOptions.forEach((selectOption) => {
      test(`The array ${JSON.stringify(selectOption)} must be truthy`, () => {
        expect(Validators.selectOptions(selectOption)).toBeTruthy()
        expect(Validators.autocompleteOptions(selectOption)).toBeTruthy()
      })
    })
    falseSelectOptions.forEach((selectOption) => {
      test(`The array ${JSON.stringify(selectOption)} must be falsy`, () => {
        expect(Validators.selectOptions(selectOption)).toBeFalsy()
        expect(Validators.autocompleteOptions(selectOption)).toBeFalsy()
      })
    })
  })
  /** Typography */
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
