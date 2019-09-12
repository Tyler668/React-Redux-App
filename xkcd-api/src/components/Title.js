import React from 'react';
import { connect } from 'react-redux';

const Title = () =>{


    return(
        <div className = 'comic-title'>
            <h1>Title</h1>
        </div>
    );
}
const mapStateToProps = state =>{
    return{
      propsImg: state.comicSRC 
    }
  }
  
  export default connect(mapStateToProps, {})(Title);
  