import { useState } from "react";

const useMenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenDrawer,
    handleCloseDrawer
  };
};

export default useMenuDrawer;
