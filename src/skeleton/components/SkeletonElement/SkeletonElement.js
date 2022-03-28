import React from 'react';
import './skeleton.css'
import PropTypes from "prop-types";

const SkeletonElement = ({type, animation, sx}) => {
    const classes = `skeleton ${type}`
    if (sx) {
        return (
            <div className={`${classes}`}
                 style={{width: sx.width, height: sx.height, backgroundColor: sx.backgroundColor}}>
                <div id={animation}></div>
            </div>
        );
    }
    return (
        <div className={`${classes}`}>
            <div id={animation}></div>
        </div>
    );
};

SkeletonElement.propTypes = {
    type: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired
}
SkeletonElement.defualtProps = {
    type: 'body',
    animation: 'wave'
}

export {SkeletonElement};