import React from 'react';
import { Form } from "antd";

const FormItem = Form.Item;

export const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  // const hasError = meta.touched && meta.invalid;
  const hasError = (meta.visited || meta.touched) && meta.invalid && (!meta.active || meta.dirty)
  return (
    <FormItem
      // {...formItemLayout}
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};
