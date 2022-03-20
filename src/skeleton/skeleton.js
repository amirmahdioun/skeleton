import React from 'react';
import {ArticleSkeleton, ProfileSkeleton} from "./components";
import style from './_Skeleton.module.scss'
import PropTypes from "prop-types";
import {TypographySkeleton} from "./components/Typography/Typography.skeleton";

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
    if(mode === 'h1' || mode === 'h2' || mode === 'h3' || mode === 'h4' || mode === 'h5' || mode === 'h6' || mode === 'title' || mode === 'body' || mode === 'caption'){
        return (
            <div>
                <TypographySkeleton animation={animation} type={mode} />
            </div>
        )
    }
};

Skeleton.propTypes = {
    mode: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired
}

export {Skeleton};