import React, { Component } from 'react';

import '../css/App.css';
import { CSSTransition } from 'react-transition-group';
class Fade extends Component{
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
            <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames="square"
            >
                <div className={`square ${this.state.show}`}>
                    Hello
                </div>
            </CSSTransition>
        <div className='showDiv' onClick={this.showToggle}>
            Show or Hide Component
        </div>
        </div>
        )
    }
}


export default Fade;