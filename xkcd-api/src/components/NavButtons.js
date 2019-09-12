import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComicAC } from '../actions';

const NavButtons = (props) => {

    return (
        <div className='nav-buttons'>
            <button >Back</button>
            <button onClick={() => props.getComicAC(Math.floor(Math.random() * 2202))}>Random</button>
            <button onClick={() => props.getComicAC('today')}>Today</button>
            <button onClick={() => props.getComicAC(props.propsNum + 1)}>Next</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        propsImg: state.comicSRC,
        propsNum: state.number
    }
}

export default connect(mapStateToProps, {getComicAC})(NavButtons);
