import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarItemProps from '../../../../types/NavbarItemProps';

const NavbarItem: React.FunctionComponent<NavbarItemProps> = ({
  text,
  route,
  togglerFunction,
}) => {
  let location = useLocation();
  return (
    <li
      className={`py-5 w-full text-center text-xl cursor-pointer ${
        location.pathname === route &&
        'bg-gray-700 text-white font-bold lg:hover:bg-gray-700'
      } lg:w-28 lg:py-3 transition lg:hover:bg-gray-300 lg:text-base`}
    >
      <Link to={route} onClick={() => togglerFunction()}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarItem;
