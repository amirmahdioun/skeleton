import React from 'react';
import {SkeletonElement} from "../SkeletonElement/SkeletonElement";

const PostSkeleton = (props) => {
    return (
        <div>
            <SkeletonElement animation={props.animation} type={'image'} sx={props.sx && {width: props.sx.width, height: props.sx.height, backgroundColor: props.sx.backgroundColor}}/>
            <SkeletonElement animation={props.animation} type={'title'} sx={props.sx && {width: props.sx.width, backgroundColor: props.sx.backgroundColor}}/>
            <SkeletonElement animation={props.animation} type={'body'} sx={props.sx && {width: props.sx.width, backgroundColor: props.sx.backgroundColor}}/>
            <SkeletonElement animation={props.animation} type={'caption'} sx={props.sx && {width: props.sx.width, backgroundColor: props.sx.backgroundColor}}/>
            <SkeletonElement animation={props.animation} type={'caption'} sx={props.sx && {width: props.sx.width, backgroundColor: props.sx.backgroundColor}}/>
        </div>
    );
};

export {PostSkeleton};