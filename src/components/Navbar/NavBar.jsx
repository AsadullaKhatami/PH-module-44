import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const nameOfPaths = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Products",
    path: "/products",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 7,
    name: "FAQ",
    path: "/faq",
  },
  {
    id: 8,
    name: "Login",
    path: "/login",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <ul
        className={`lg:hidden absolute ${
          open ? "top-12" : "-top-100"
        }  duration-1000 px-10`}
      >
        {nameOfPaths.map((route) => (
          <li key={route.id}>{route.name}</li>
        ))}
      </ul>
      <div className="h-20 flex justify-between items-center px-10 bg-white relative">
        <span
          onClick={() => setOpen(!open)}
          className="flex justify-center items-center"
        >
          {open ? (
            <X className="lg:hidden"></X>
          ) : (
            <Menu className="lg:hidden"></Menu>
          )}
          <h1 className="text-3xl ml-4 uppercase">My navbar</h1>
        </span>

        <ul className="lg:flex hidden">
          {nameOfPaths.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
        <button className="border rounded-xl p-3 hover:bg-gray-400 hover:text-white">Subscription</button>
      </div>
    </nav>
  );
};

export default NavBar;
