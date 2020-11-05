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
       timeout= {{
           enter:2000,
           exit:50
       }}
           onEnter = { (node) =>{
                   console.log('Enter')
               }
           }
           onExit = { (node) =>{
            console.log('Exit')
        }
    }
       >
        {state => <div className={`square square-${state}`}>
        state is: square square-${state} </div>}
       </Transition>
        <div className='showDiv' onClick={this.showToggle}>
            Show or Hide Component
        </div>
        </div>
        )
    }
}


export default TransitionComp;