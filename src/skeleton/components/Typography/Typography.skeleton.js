import React from 'react';
import {SkeletonElement} from "../SkeletonElement/SkeletonElement";

const TypographySkeleton = (props) => {
    return (
        <>
            <SkeletonElement animation={props.animation}  type={props.type}/>
        </>
    );
};

export {TypographySkeleton};