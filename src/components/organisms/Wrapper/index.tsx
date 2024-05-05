import React from 'react';
import './index.scss';

type wrapperType = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: wrapperType) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
