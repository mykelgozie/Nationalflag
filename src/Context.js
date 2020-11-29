import React, { useEffect,useState } from "react"

const Context = React.createContext();

function ContextProvider(props){

    const [item, setItems] = useState([]);


    const [word, setWord] = useState("");

    function inWord(text){
   

     const result = item.filter((content)=>{

        return content.name.toLowerCase().includes(text.toLowerCase());

     });

     setItems(result);

    }





    function loadFlag(){

       
    fetch("https://restcountries.eu/rest/v2/all").then( res => { return res.json() } ).then(data => { 

        setItems(data);

    }
     
    );
    }

    useEffect(()=>{

        loadFlag();
    },[]);

 

    return (


        <Context.Provider value={{item , inWord}} >

                {props.children}

        </Context.Provider>
    )


}

export {ContextProvider, Context}