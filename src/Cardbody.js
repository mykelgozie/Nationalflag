import React, {useContext} from "react";
import {Card, Button,ListGroup} from "react-bootstrap"
import './Mainbody.css'
import flag from './flag.jpg';
import {Context} from './Context'


function Cardbody(props){

    console.log(props.allCountry);

  return (   
      
 
        
      
        
      props.allCountry.map(item => (

             <Card  className="card">
                    <Card.Img variant="top" src={item.flag}  />
                   <Card.Body>
                < Card.Title>{item.name}</Card.Title>
                       
                      <ListGroup variant="flush">
                         <ListGroup.Item>{item.region}</ListGroup.Item>
                         <ListGroup.Item>{item.population}</ListGroup.Item>
                            <ListGroup.Item>{item.capital}</ListGroup.Item>
                            <ListGroup.Item>{item.subregion}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
      ))

    

  )

      



// {/* 
//         <Card  className="card">
//             <Card.Img variant="top" src={flag}  />
//             <Card.Body>
//                 <Card.Title>Japan</Card.Title>
               
//                 <ListGroup variant="flush">
//                     <ListGroup.Item>Cras justo odio</ListGroup.Item>
//                     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//                     <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//                     <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//                 </ListGroup>
//             </Card.Body>
//         </Card> */}
    
  

}

export default Cardbody;