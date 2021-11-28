import React from 'react';
import LayoutProps from '../../../types/LayoutProps';

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Layout;
