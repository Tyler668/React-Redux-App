import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComicAC } from '../actions';

const NavButtons = ({ getComicAC, isFetching, error, number }) => {


    useEffect(() => {
            getComicAC()
    }, [getComicAC])



    return (
        <div className='nav-buttons'>
            <button >Back</button>
            <button onClick={() => getComicAC(Math.floor(Math.random() * 2202))}>Random</button>
            <button onClick={() => getComicAC('today')}>Today</button>
            <button onClick={() => getComicAC(5)}>Next</button>
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
