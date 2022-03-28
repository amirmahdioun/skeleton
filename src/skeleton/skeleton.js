import React from 'react';
import {ArticleSkeleton, PostSkeleton, ProfileSkeleton} from "./components";
import style from './_Skeleton.module.scss'
import PropTypes from "prop-types";
import {TypographySkeleton} from "./components/Typography/Typography.skeleton";

const Skeleton = ({mode = 'article', animation = 'wave', sx}) => {
    if(mode === 'article'){
        return (
            <div className={style.skeletonWrapper}>
                <ArticleSkeleton animation={animation} sx={sx}/>
            </div>
        )
    }
    if(mode === 'profile'){
        return (
            <div className={style.skeletonWrapper}>
                <ProfileSkeleton animation={animation} sx={sx}/>
            </div>
        )
    }
    if(mode === 'h1' || mode === 'h2' || mode === 'h3' || mode === 'h4' || mode === 'h5' || mode === 'h6' || mode === 'title' || mode === 'body' || mode === 'caption'){
        return (
            <div>
                <TypographySkeleton animation={animation} type={mode} sx={sx}/>
            </div>
        )
    }
    if(mode === 'post'){
        return (
            <div className={style.skeletonWrapper}>
                <PostSkeleton animation={animation} sx={sx}/>
            </div>
        )
    }
};


// Skeleton.defualtProps = {
//     mode: 'article',
//     animation: 'wave'
// }
//
// Skeleton.propTypes = {
//     mode: PropTypes.string.isRequired,
//     animation: PropTypes.string.isRequired
// }

export {Skeleton};