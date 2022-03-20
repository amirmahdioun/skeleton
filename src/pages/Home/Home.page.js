import React from 'react';
import {ArticlesComponent, UserComponent} from "components";
import './Home.style.css'

const HomePage = () => {
  return (
      <div className={'container'}>
        <div className="content">
            <ArticlesComponent />
            <UserComponent />
        </div>
      </div>
  );
};

export {HomePage};
