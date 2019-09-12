import React from 'react';
import { connect } from 'react-redux';

const NavButtons = () =>{


    return(
        <div className = 'nav-buttons'>
            <button>Back</button>
            <button>Random</button>
            <button>Today</button>
            <button>Next</button>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
      propsImg: state.comicSRC 
    }
  }
  
  export default connect(mapStateToProps, {})(NavButtons);
  