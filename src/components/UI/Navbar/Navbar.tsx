import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import routes from '../../../routes/routes';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar: React.FunctionComponent = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <nav className="h-24 border-b border-solid border-gray-400 flex flex-row justify-around items-center">
      <Link to={routes.HOME}>
        <h1 className="text-4xl font-bold">MoviesApp</h1>
      </Link>
      <button className="text-3xl w-12 lg:hidden" onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={!showBurgerMenu ? faBars : faTimes} />
      </button>
      <div
        className={`transform ${
          !showBurgerMenu ? '-translate-x-full' : 'translate-x-0'
        } h-auto w-full absolute top-24 bg-gray-100 lg:translate-x-0 lg:relative lg:top-0 lg:w-auto lg:h-auto lg:bg-transparent`}
      >
        <ul className="flex flex-col items-center shadow-lg lg:flex-row lg:justify-evenly lg:shadow-none">
          <NavbarItem
            text="Home"
            route={routes.HOME}
            togglerFunction={handleToggleMenu}
          />
          <NavbarItem
            text="Search"
            route={routes.SEARCH}
            togglerFunction={handleToggleMenu}
          />
          <NavbarItem
            text="My Profile"
            route={routes.PROFILE}
            togglerFunction={handleToggleMenu}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
