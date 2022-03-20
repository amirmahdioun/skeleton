import React from 'react';
import {SkeletonElement} from "../SkeletonElement/SkeletonElement";

const ArticleSkeleton = (props) => {
    return (
        <div>
            <SkeletonElement animation={props.animation} type={'h3'} />
            <SkeletonElement animation={props.animation} type={'body'} />
            <SkeletonElement animation={props.animation} type={'body'} />
            <SkeletonElement animation={props.animation} type={'body'} />
        </div>
    );
};

export {ArticleSkeleton};