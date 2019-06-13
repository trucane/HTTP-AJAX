import React from 'react';
import {NavLink} from 'react-router-dom';



const NavBar = () =>{
    return (
        <>
        <NavLink to={`/`} > Home </NavLink>
        <NavLink to={`/friends`} > My Friends </NavLink>
        </>
    )
}

export default NavBar