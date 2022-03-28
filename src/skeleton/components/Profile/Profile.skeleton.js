import React from 'react';
import style from './_Profile.module.scss'
import {SkeletonElement} from "../SkeletonElement/SkeletonElement";

const ProfileSkeleton = (props) => {
    return (
        <div className={style.profileSkeleton}>
            <div className={style.profileSkeleton__header} style={props.sx && {width: props.sx.width}}>
                <SkeletonElement animation={props.animation} type={'avatar'} sx={props.sx && {backgroundColor: props.sx.backgroundColor}}/>
                <SkeletonElement animation={props.animation} type={'title'} sx={props.sx && {backgroundColor: props.sx.backgroundColor}}/>
            </div>
            <SkeletonElement animation={props.animation} type={'body'} sx={props.sx && {width: props.sx.width, backgroundColor: props.sx.backgroundColor}}/>
            <SkeletonElement animation={props.animation} type={'body'} sx={props.sx && {width: props.sx.width, backgroundColor: props.sx.backgroundColor}}/>
        </div>
    );
};

export {ProfileSkeleton};