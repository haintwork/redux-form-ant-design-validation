export const requiredField = fieldName => (value) => {
  if (!value || value === '') {
    return `${fieldName} is required!`
  }
  return undefined
}

export const maximumChars = max => (value) => {
  // validation logic here
  return undefined
}

export const bulkValidate = (validations, values) => {
  const error = {}
  Object.keys(validations).forEach((field) => {
    const value = values[field]
    validations[field].forEach((validateFunc) => {
      if (!error[field]) {
        error[field] = validateFunc(value)
      }
    })
  })
  return error
}
