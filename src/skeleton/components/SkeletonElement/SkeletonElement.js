import React from 'react';
import './skeleton.css'
import PropTypes from "prop-types";

const SkeletonElement = ({type, animation}) => {
    const classes = `skeleton ${type}`
    return (
        <div className={`${classes}`} >
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