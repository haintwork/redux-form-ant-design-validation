import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { requiredField } from '../../helpers/form-validate'
import { makeField } from '../../SimpleForm'

const AInput = makeField(Input)

const validations = {
  comment: [
    requiredField('Comment')
  ],
}

class FieldComponent extends Component {
  render() {
    const { name, label, form } = this.props
    return (
      <div>
        <Field
          name={name}
          label={label}
          component={AInput}
          validate={validations.comment}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    form: props.formName,
  }
}

export default compose(
  connect(mapStateToProps, null),
  reduxForm({
  })
)(FieldComponent)

// export default FieldComponent
