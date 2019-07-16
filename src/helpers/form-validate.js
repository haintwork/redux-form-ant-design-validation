export const requiredField = fieldName => (value) => {
  console.log('validate: ', value);
  if (!value || value === '') {
    console.log('error');
    return `${fieldName} is required!`
  }
  return undefined
}
