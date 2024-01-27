import React from 'react';
import Navbar from '../shared/navbar';
import Footer from '../shared/footer';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;