import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { Field, reduxForm } from 'redux-form'

import { makeField } from '../../SimpleForm'
import { requiredField } from '../../helpers/form-validate'
import FieldComponent from '../field-component/field-component'

const AInput = makeField(Input)

const form = 'share-comment-form'

const validations = {
  email: [
    requiredField('Email')
  ],
}

class MainForm extends Component {
  render() {
    return (
      <div>
        <p>
          Main Form
        </p>
        <Field
          name="email"
          key="email"
          label="Email"
          component={AInput}
          validate={validations.email}
        />
        <FieldComponent
          name="comment"
          key="comment"
          label="Comment"
          formName={form}
        />
        <Button
          type="primary"
          htmlType="submit"
        >Send</Button>
      </div>
    )
  }
}

export default reduxForm({
  form: form,
})
  (MainForm)
