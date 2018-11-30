import React from 'react';

export default ({ children }) => (
  <div className="panda-doc-content">
    <div className="panda-doc-content panda-doc-content--button">
      <section>
        {children}
      </section>
    </div>
  </div>
);
