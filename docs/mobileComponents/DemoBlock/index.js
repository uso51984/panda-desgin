import React from 'react';
import classNames from 'classnames';

export default ({ title, children, className }) => (
  <section className={classNames('panda-doc-demo-block', className)}>
    <h2 className="panda-doc-demo-block__title">{title}</h2>
    <div>
      {children}
    </div>
  </section>
);
