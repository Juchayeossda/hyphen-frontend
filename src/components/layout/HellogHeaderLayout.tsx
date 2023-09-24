import React from 'react';
import Header from '../common/Hellog/Header';
import { Outlet } from 'react-router-dom';

const HellogHeaderLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default HellogHeaderLayout;