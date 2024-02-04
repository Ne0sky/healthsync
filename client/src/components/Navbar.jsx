import React, { useState } from "react";
import { IoIosVideocam } from "react-icons/io";
import {Link as L} from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { MdLogout } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
    const nav = useNavigate();
    const {user} = useAuthContext();
    const {logout} = useLogout();
    const handleLogout = async() => {
        console.log("logout");
        await logout();
    }

    const handleJoinMeet = async (e) =>{
        e.preventDefault();
        const meetid = user?._id;
        nav(`/meet/${meetid}`);

    }

  return (
    <div>
      <div className="flex font-main flex-row fixed top-0 w-full justify-between py-3 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <L to="/" className="font-semibold text-2xl  cursor-pointer">
            HealthSync
          </L>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-base">
            
            
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
            
            {
                user && user.type=='patient' &&(
                    <L to='/patient/prescriptions' >Get Prescriptions</L>
                )
            }
            {
                user && user.type==='doctor' &&(
                    <button onClick={handleJoinMeet} className="flex items-center hover:bg-lime-400 gap-2 bg-lime-300 border border-lime-700 rounded-xl p-2 rounded"><p className="">Join Meet</p><IoIosVideocam className="text-2xl "/></button>
                )
            }
            { user && (
                <button className={'p-2 bg-rose-300 flex hover:bg-rose-400 items-center gap-2 rounded-xl border border-rose-700'} onClick={handleLogout}>Logout<MdLogout/></button>
            )}
        </nav>
    </div>
    </div> 
  );
};

export default Navbar;
