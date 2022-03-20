import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATHS} from "configs/routes.config";
import {ExamplesPage, HomePage} from "pages";
import {MainLayout} from "layouts";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path={PATHS.HOME}
                           element={<HomePage/>}/>
                    <Route path={PATHS.EXAMPLES}
                           element={<ExamplesPage/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

export {AppRoute};