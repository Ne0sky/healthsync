import React, { useState } from "react";
import {Link } from 'react-scroll';
import {Link as L} from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();
    const handleLogout = async() => {
        console.log("logout");
        await logout();
    }
  return (
    <div>
      <div className="flex flex-row absolute top-0 w-full justify-between py-3 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <L to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            Health <span className="text-green-500">S</span>ync
          </L>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
            
            
            {/* <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#539165] transition-all cursor-pointer"
            >
                Contact
            </Link> */}
            { !user && (
            <L to="/login" className="bg-lime-600 px-4 py-2 text-white rounded-md hover:bg-lime-700 transition-all cursor-pointer">
                Login
            </L>
                )}
            { user && (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    </div>
    </div> 
  );
};

export default Navbar;
