import React from 'react';
import { connect } from 'react-redux';

const ComicDisplay = (props) =>{


    return (
        <div className = 'comic-container'>
            <img className  = 'comic-image' src = {`${props.propsImg}`}/>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
      propsImg: state.comicSRC 
    }

    
    
  }
  
  export default connect(mapStateToProps, {})(ComicDisplay);
  