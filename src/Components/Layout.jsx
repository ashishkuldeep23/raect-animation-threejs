import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div>

            {/* <p className=' text-red-500'>Lorem ipsum dolor</p> */}


            <Navbar
                brandIcon="(link unavailable)"
                brandName="My App"
                navItems={navItems}
            />

            <div className=' h-[90vh] '>{children}</div>
        </div>
    )
}

export default Layout