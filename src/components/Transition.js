import React, { Component } from 'react';
import '../css/App.css';

class TransitionComp extends Component{

    state={
        show:false
    }

    render(){
        return(
        <div>{ this.state.show ? <div style={{
                    background: 'lightgray',
                    height:'100px'
                }}>
                    Transition - 1
            </div>
            :
            null
        }
        </div>
        )
    }
}


export default TransitionComp;