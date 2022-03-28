import React from 'react';
import style from './_Header.module.scss'
import {Link} from "react-router-dom";
import {PATHS} from "../../../../configs/routes.config";

const HeaderComponent = () => {
    return (
        <header>
            <div className={style.container}>
                <div className={style.headerContent}>
                    <h1>React skeleton</h1>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`${PATHS.EXAMPLES}`}>Examples</Link></li>
                        <li><Link to={`${PATHS.DOCUMENT}`}>Docs</Link></li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export {HeaderComponent};