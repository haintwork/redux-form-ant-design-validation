import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { Field, reduxForm } from 'redux-form'

import { requiredField, maximumChars } from '../../helpers/form-validate'
import { makeField } from '../../helpers/make-field'
import FieldComponent from '../field-component/field-component'

const form = 'share-comment-form'

const AInput = makeField(Input)

const validations = {
  email: [
    requiredField('Email'),
  ],
  comment: [
    requiredField('Comment'),
    maximumChars(100),
  ],
}

const submit = (values, props) => {
  // submit logic here
}

class MainForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <p>
          Main Form
        </p>
        <Field
          name="email"
          label="Email"
          component={AInput}
          validate={validations.email}
        />
        <FieldComponent
          name="comment"
          label="Comment"
          formName={form}
          customValidations={validations}
        />
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSubmit(submit)}
        >Send</Button>
      </div>
    )
  }
}

export default reduxForm({
  form: form,
})(MainForm)
