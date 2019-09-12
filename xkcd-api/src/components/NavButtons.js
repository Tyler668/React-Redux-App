import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComicAC } from '../actions';

const NavButtons = (props) => {

    const nextIterator = () =>{
        if(props.propsNum === 2201){return 1}
        else{return props.propsNum + 1}
    }

    const backIterator = () =>{
        if(props.propsNum === 1){return 'today'}
        else{return props.propsNum - 1}
    }


    return (
        <div className='nav-buttons'>
            <button onClick={() => props.getComicAC(backIterator())}>Back</button>
            <button onClick={() => props.getComicAC(Math.floor(Math.random() * 2202))}>Random</button>
            <button onClick={() => props.getComicAC('today')}>Today</button>
            <button onClick={() => props.getComicAC(nextIterator())}>Next</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        propsImg: state.comicSRC,
        propsNum: state.number
    }
}

export default connect(mapStateToProps, { getComicAC })(NavButtons);
