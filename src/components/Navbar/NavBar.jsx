import React from 'react';
import Link from './Link';

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
    return (
        <nav>
            {/* <ul className='flex'>
                {
                    nameOfPaths.map(route => <li key={route.id} className='mr-10'> <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            <ul className='flex'>
                {
                    nameOfPaths.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;