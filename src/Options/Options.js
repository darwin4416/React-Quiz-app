import React,{Component} from 'react';

// const Options = (props) => {
//     const sendToParent =(value)=>{
//         props.attemptValue(value)
//     }
//     return (
//         <div className="options">
//             <ul>
//                 <List clicked={props.options.A} No="A." sendValue ={sendToParent} />
//                 <List clicked={props.options.B} No="B." />
//                 <List clicked={props.options.C} No="C." />
//                 <List clicked={props.options.D} No="D." />
//             </ul>
//         </div>
//     )
// }
class Options extends Component{
    constructor(props){
        super(props);
        this.state = {
            A:false,
            B:false,
            C:false,
            D:false
        }
        this.clickHandler =this.clickHandler.bind(this);
    }
   clickHandler(val){
       if(val === "A"){
        this.setState({A:true,B:false,C:false,D:false})
       }
       if(val === "B"){
        this.setState({A:false,B:true,C:false,D:false})
       }
       if(val === "C"){
        this.setState({A:false,B:false,C:true,D:false})
       }
       if(val === "D"){
        this.setState({A:false,B:false,C:false,D:true})
       }       
   }
   componentWillReceiveProps(nextProps) {
     if(nextProps){
        this.setState({A:false,B:false,C:false,D:false})
     }
    }
  
   render(){
       return(
           <div className="options">
               <ul>
                   <List 
                       isActive={this.clickHandler}
                       option="A"
                       status={this.state.A}
                       value={this.props.options.A}
                   />
                   <List
                       isActive={this.clickHandler}
                       option="B"
                       status={this.state.B}
                       value={this.props.options.B}
                   />
                   <List
                       isActive={this.clickHandler}
                       option="C"
                       status={this.state.C}
                       value={this.props.options.C}
                   />
                   <List
                       isActive={this.clickHandler}
                       option="D"
                       status={this.state.D}
                       value={this.props.options.D}
                   />
               </ul>
           </div>
       )
   }
}
const List =(props) =>{
    const clickHandler = () => {
         props.isActive(props.option)
    }
    return(
        <li
            onClick={clickHandler}
            style={props.status ? { filter: 'contrast(.8)' } : null}>
            {props.option}. {props.value}
        </li>
    )
   
}
export default Options;