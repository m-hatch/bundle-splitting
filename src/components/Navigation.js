import React from 'react';
import merge from 'lodash/fp/merge';

const Navigation = () => {
  const home = { home: 'Home' };
  const blog = { blog: 'Blog' };
  const labels = merge(home, blog);

  return (
    <ul>
      <li><a href="/">{ labels.home }</a></li>
      <li><a href="/blog">{ labels.blog }</a></li>
    </ul>
  )
};

export default Navigation;
