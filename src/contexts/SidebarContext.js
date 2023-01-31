import React, { createContext, useState } from 'react';

//tao context

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  //sideBar state
  const [isOpen, setIsOpen] = useState(false);

  const handderClose = () => {
    setIsOpen(false);
  }

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, handderClose }}>
    {
      children
    }
  </SidebarContext.Provider>;
};

export default SidebarProvider;
