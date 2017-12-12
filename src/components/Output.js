import React, { Component } from 'react'
import { connect } from 'react-redux';
import marked from 'marked';
import { Parser as HtmlToReactParser} from 'html-to-react';

const markup = (input) => {
  const raw = marked(input, { sanitize: true, gfm: true });
  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(raw);
  return reactElement;
}

class Output extends Component {
  render() {
    this.props.formValues && console.log(markup(this.props.formValues.textInput))
    return (
      <div>
        {this.props.formValues && markup(this.props.formValues.textInput)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.inputForm.values };
}

export default connect(mapStateToProps, null)(Output);