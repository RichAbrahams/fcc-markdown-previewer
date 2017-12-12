import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";

const inputField = ({ input, meta: { error, touched } }) => {
  console.log(input.value)
  return (
    <div>
      <textarea
        {...input}
        style={{ marginBottom: '5px', height: "450px", maxHeight: '450px', resize: "none", }}
        autoFocus
      />
    </div>
  );
}

class InputForm extends Component {
  render() {
    return (
      <div>
        <Field component={inputField} type="textarea" rows="25" cols="50" name="textInput" />
      </div>
    )
  }
}

export default reduxForm({
  form: "inputForm",
})(InputForm);