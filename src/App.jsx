import React from "react";
import { MDBContainer } from "mdbreact";
import Calander from "./Components/Calander";

const App=()=>{
    return (
        <>
         <MDBContainer className="bg-dark text-white py-5">
            <h1 className="text-center">Find Out How Many days you lived</h1>
        </MDBContainer>
        <Calander/>
        </>
    )
}

export default App;