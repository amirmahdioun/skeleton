import React from 'react';
import style from './_Profile.module.scss'
import {SkeletonElement} from "../SkeletonElement/SkeletonElement";

const ProfileSkeleton = (props) => {
    return (
        <div className={style.profileSkeleton}>
            <div className={style.profileSkeleton__header}>
                <SkeletonElement animation={props.animation} type={'avatar'} />
                <SkeletonElement animation={props.animation} type={'title'} />
            </div>
            <SkeletonElement animation={props.animation} type={'body'} />
            <SkeletonElement animation={props.animation} type={'body'} />
        </div>
    );
};

export {ProfileSkeleton};