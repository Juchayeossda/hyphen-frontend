import React, { useEffect } from 'react';
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';
import {useRecoilValue} from 'recoil'
import { isActivePageAtom } from '../../state/headerAtom';

const HeaderLayout = () => {
    const isActivePage = useRecoilValue(isActivePageAtom)

    return (
        <>
            <Header page={isActivePage}/>
            <Outlet/>
        </>
    );
};

export default HeaderLayout;