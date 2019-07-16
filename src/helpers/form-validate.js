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
