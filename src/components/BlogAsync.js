import React, { Fragment, PureComponent } from 'react';

const codeString = `
  const hello = () => {
    console.log('Hello World!');
  }`;

class BlogAsync extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      SyntaxHighlighter: null
    }
  }

  componentDidMount() {
    import(/* webpackChunkName: "highlighter" */ 'react-syntax-highlighter')
      .then(module => {
        this.setState({ SyntaxHighlighter: module.default });
      });
  }

  render() {
    const { SyntaxHighlighter } = this.state;

    return (
      <div>
        { SyntaxHighlighter &&
          <Fragment>
            <h1>Hello Blog!</h1>
            <strong>Naming an anonymous function</strong>
            <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>
          </Fragment>
        }
      </div>
    );
  }
}

export default BlogAsync;
