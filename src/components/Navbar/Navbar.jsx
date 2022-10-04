import React from 'react'
import { FcSearch } from 'react-icons/fc'
import logoNextflit from '../../assets/image/Netflix-logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="">
                <img src={logoNextflit} alt="" />
            </div>
            
            <div className="">
                <FcSearch />
                <input type="text" placeholder='Search...' />
            </div>
        </div>
    )
}

export default Navbar