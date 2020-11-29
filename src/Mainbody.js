import React, {useContext} from "react"
import './Mainbody.css'
import Cardbody from './Cardbody'
import {Context} from "./Context"

function Mainbody(props){

    const {item} = useContext(Context);
    console.log(item);

    return (
        <div className="mainbody">
            <Cardbody allCountry = {item}/>
            {/* <Cardbody/>
            <Cardbody/>
            <Cardbody/>
            <Cardbody/>
            <Cardbody/>
            <Cardbody/>
            <Cardbody/> */}
            

           
        </div>


    )
}

 export default Mainbody;