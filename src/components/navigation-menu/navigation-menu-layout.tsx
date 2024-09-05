import { useState } from "react";
import NavigationMenuDesktop from "./navigation-menu-desktop";
import MobileMenu from "./navigation-menu-mobile";
import TopBar from "./navigation-menu-top-bar";

const NavigationMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavigationMenuDesktop />
      <TopBar onToggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} />
        
    </>
  );
};

export default NavigationMenu;
