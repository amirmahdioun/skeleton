import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATHS} from "configs/routes.config";
import {DocumentPage, ExamplesPage, HomePage} from "pages";
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
                    <Route path={PATHS.DOCUMENT}
                           element={<DocumentPage/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

export {AppRoute};