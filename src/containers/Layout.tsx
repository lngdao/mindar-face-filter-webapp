import React from 'react';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full px-5 py-7 md:px-14 md:py-12 relative">
      {children}
    </div>
  );
};

export default Layout;
