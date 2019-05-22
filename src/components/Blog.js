import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Blog = () => {
  const codeString = `
    const hello = () => {
      console.log('Hello World!');
    }`;

  return (
    <div>
      <h1>Hello Blog!</h1>
      <strong>Naming an anonymous function</strong>
      <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>
    </div>
  )
};

export default Blog;
