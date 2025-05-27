import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu ,AiOutlineClose  } from 'react-icons/ai';

const NaveBar = () => {
    const [open, setOpen]= useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/login', name: 'Login' }
    ];

    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className=" md:hidden" onClick={() =>setOpen(!open)}>
                {/* {
                    open=== true? 'open' : 'close'
                } */}
                {
                    open=== true? <AiOutlineClose className="text-2xl "></AiOutlineClose> : <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
                }
                {/* <AiOutlineMenu className="text-2xl "></AiOutlineMenu> */}
            </div>
            <ul className={`md:flex         duration-1000 absolute md:static
            ${open ? 'top-16':'-top-60'} 
            bg-yellow-200 px-6  `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NaveBar;