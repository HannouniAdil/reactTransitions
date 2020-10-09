import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';

class TransitionComp extends Component{

    state={
        show:false
    }

    showToggle = () => {
        this.setState({
            show:!this.state.show ? true : false
        })
    }

    render(){
        return(
        <div>
        {/* { this.state.show ? <div style={{
                    background: 'lightgray',
                    height:'100px'
                }}>
                    Transition - 1
            </div>
            :
            null
        } */}
       <Transition in={this.state.show}
       timeout= {2000}
       mountOnEnter
       unmountOnExit
       >
        {state => <div style={{
            background:'lightgray',
            height: '100px',
            transition: 'all 2s ease',
            opacity: state==='exited' || state ==='exiting' ? 0 : 1
        }}>
        state is: {state} </div>}
       </Transition>
        <div className='showDiv' onClick={this.showToggle}>
            Show or Hide Component
        </div>
        </div>
        )
    }
}


export default TransitionComp;