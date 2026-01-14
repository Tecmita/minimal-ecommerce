import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  HouseSimple,
  MagnifyingGlass,
  ShoppingCartSimple,
} from "phosphor-react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed w-full bottom-0 bg-amber-200 p-2 md:static z-20">
        <ul className="flex gap-4 justify-between text-[#999999] mx-8">
          <NavItems to="/products" icon={HouseSimple} label="Home" />
          <NavItems
            to="/search"
            icon={MagnifyingGlass}
            label="Search"
            element=""
          />
          <NavItems to="/cart" icon={ShoppingCartSimple} label="Cart" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
