import React from 'react';
import {SkeletonElement} from "../SkeletonElement/SkeletonElement";

const ArticleSkeleton = (props) => {
    return (
        <div>
            <SkeletonElement animation={props.animation} type={'h3'} sx={props.sx && {width: props.sx.width}}/>
            <SkeletonElement animation={props.animation} type={'body'} sx={props.sx && {width: props.sx.width}}/>
            <SkeletonElement animation={props.animation} type={'body'} sx={props.sx && {width: props.sx.width}}/>
            <SkeletonElement animation={props.animation} type={'body'} sx={props.sx && {width: props.sx.width}}/>
        </div>
    );
};

export {ArticleSkeleton};