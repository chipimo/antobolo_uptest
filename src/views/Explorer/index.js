import React, {useState} from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert, 
  Button
} from "shards-react";
import PageTitle from "../../components/common/PageTitle";

function Explorer() {
   const [PostListOne, SetPostListOne] = useState()
    return (
        <div style={{paddingTop:10, paddingBottom:20}}>
            <Container fluid className="main-content-container px-14">
       
         <div>
         
             <div style={{borderColor:"#cfcfcf", borderStyle:"solid", borderWidth:1, height:210, width:"100%", borderRadius:10, backgroundColor:"#eeeeee"}}>
                 <div style={{height:90}}>
                     
                 </div>
                 <div style={{padding:10}}>
                     <h5 style={{color:"green", margin:0, padding:0}}>Antobolo Level up </h5>
                     <p style={{padding:0, margin:0}}>Get 2 points with every purchase you make </p>
                 </div>
                 <Button theme="success" outline pill size="sm" className="mb-2">
               <i className="material-icons mr-1">person_add</i>Level up now
                 </Button>
             </div>
             
             <div style={{marginTop:20}}>
                <div>
                <strong>
                    <h5 style={{color:"green", margin:0,padding:0}}>Bestsellers</h5></strong>
                    <p style={{margin:0,padding:0}}>This year's top sellers</p>
                </div>
                
                <div style={{paddingTop:6}}>
                     <Card small className="mb-4">
                      books 
                     </Card>
                </div>
             </div>
            
         </div>     
      </Container>
       </div>
    )
}

export default Explorer
