import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { makeField } from '../../helpers/make-field'

const AInput = makeField(Input)

class FieldComponent extends Component {
  render() {
    const { name, label, customValidations } = this.props
    return (
      <div>
        <Field
          name={name}
          label={label}
          component={AInput}
          validate={customValidations[name]}
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
