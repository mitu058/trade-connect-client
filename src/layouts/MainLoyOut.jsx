import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLoyOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLoyOut;