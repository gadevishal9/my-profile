import React from 'react';
import './MainPageContents.css';
const MainPageContents = (props) =>{
    var class_name;
   if(props.name == "vishal gade"){
    class_name = 'main_name';
   }
   else {class_name = "normal";}
    return(
       
        <h1 className ={class_name}> {props.name} </h1>
       
    );
}
export default MainPageContents;