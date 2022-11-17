import React, { ReactElement, ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1020px] mx-auto">{children}</main>
    </>
  );
}

export default Layout
