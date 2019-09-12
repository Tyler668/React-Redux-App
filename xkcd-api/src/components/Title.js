import React from 'react';
import { connect } from 'react-redux';
import { getComicAC } from '../actions';

const Title = (props) => {


    return (
        <div className='comic-title'>
            <h1>{props.propsTitle}</h1>
            <h2>#{props.propsNum}</h2>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        propsTitle: state.title,
        propsNum: state.number
    }
}

export default connect(mapStateToProps, {getComicAC})(Title);
