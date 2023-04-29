import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <div class="left">
                    <div class='navlogo'>
                    <NavLink to="/"><img src='./logo.png'alt=''/></NavLink>
                    </div>
                </div>
                <div class="right">
                    <div className='nav_btn'>
                        <NavLink to="/login">menu1</NavLink>
                        </div>
                        <div className='nav_btn'>
                        <NavLink to="/login">menu1</NavLink>
                        </div>
                        <div className='nav_btn'>
                        <NavLink to="/login">menu1</NavLink>
                        </div>
                        <div className='nav_btn'>
                        <NavLink to="/login">menu1</NavLink>
                        </div>
                       
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar