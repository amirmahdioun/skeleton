import React from 'react';
import {HeaderComponent} from "./components/Header/Header.component";

const MainLayout = (props) => {
    return (
        <>
            <HeaderComponent />
            {props.children}

        </>
    );
};

export {MainLayout};