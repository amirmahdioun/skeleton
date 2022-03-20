import React from 'react';
import {ArticleSkeleton, ProfileSkeleton} from "./components";
import style from './_Skeleton.module.scss'
import PropTypes from "prop-types";

const Skeleton = ({mode, animation}) => {
    if(mode === 'article'){
        return (
            <div className={style.skeletonWrapper}>
                <ArticleSkeleton animation={animation}/>
            </div>
        )
    }
    if(mode === 'profile'){
        return (
            <div className={style.skeletonWrapper}>
                <ProfileSkeleton animation={animation}/>
            </div>
        )
    }
};

Skeleton.propTypes = {
    mode: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired
}

export {Skeleton};