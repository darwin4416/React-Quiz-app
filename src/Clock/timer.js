import React,{ Component }  from 'react';


class Timer extends Component{
    constructor(props){
        super(props);
        this.state  = {
            time: Date.now()
        }
        this.runClock = this.runClock.bind(this);
     
    }
    runClock(){
        this.setState({
            time:Date.now()
        })
    }
    shouldComponentUpdate(){
        setTimeout(() => {
            this.runClock()
        }, 400);
    }
   
    render(){
        return(
            <div className ="timer">
                {this.state.time}
            </div>
        )
    }
}
export default Timer;