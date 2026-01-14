import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ to, icon: Icon, label }) => {
  return (
    <div>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-black" : "text-[#999] "
            }`
          }
        >
          <Icon size={24} />
          <span className="text-sm">{label}</span>
        </NavLink>
      </li>
    </div>
  );
};

export default NavItems;
