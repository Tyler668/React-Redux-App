import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getComicAC } from '../actions';
import axios from 'axios';

const NavButtons = (props) => {

    const [currentComic, setCurrentComic] = useState('')

    axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`)
        .then(res => {
            const currentIndex = res.data.num;
            setCurrentComic(currentIndex);
        })





    const nextIterator = () => {
        if (props.propsNum === currentComic) { return 1 }
        else { return props.propsNum + 1 }
    }

    const backIterator = () => {
        if (props.propsNum === 1) { return '/' }
        else { return props.propsNum - 1 }
    }


    return (
        <div className='nav-buttons'>
            <button onClick={() => props.getComicAC(backIterator())}>Back</button>
            <button onClick={() => props.getComicAC(Math.floor(Math.random() * 2202))}>Random</button>
            <button onClick={() => props.getComicAC('/')}>Today</button>
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
