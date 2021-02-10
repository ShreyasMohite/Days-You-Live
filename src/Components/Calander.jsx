import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol  } from "mdbreact";
import moment from "moment";


const Calander=()=>{
    const [date,setdate]=useState("2000-12-29");
    const [year,setyear]=useState("");
    const [month,setmonth]=useState("")
    const [day,setday]=useState("");
    const [nowbirthday,setbirthday]=useState("");
    const inputevent=(event)=>setdate(event.target.value);
    useEffect(()=>{
        
            const today=moment();
            const birthday=moment(date)
            const daysdif=today.diff(birthday, 'days');
            setday(daysdif);
            const monthdif=today.diff(birthday, 'months');
            setmonth(monthdif);
            const yeardif=today.diff(birthday, 'years');  
            setyear(yeardif);  
            const dates=moment(date);
            const thisyear=today.year();
            const thismonths=dates.month();
            const thisdate=dates.date();
            const thisbirthday=moment([thisyear,thismonths,thisdate]);
            const birthdaydif=thisbirthday.diff(today,"days");
            setbirthday(birthdaydif)
            

        
       
    })
    
    return (
        <>
         <MDBContainer className="my-5 text-center">
             <h3 className="my-3">Select your birthdate</h3>
        <input type="date" name="date" id="" onChange={inputevent} value={date} defaultValue="2000-12-29"/>
        <br/>
        </MDBContainer>

        <MDBContainer className="bg-dark my-4 py-5 text-white">
           <h2 className="text-center py-2">You lived</h2>
           <MDBRow className="text-center">
            <MDBCol md="4">
            <h4>{year} years</h4>
            </MDBCol>
            <MDBCol md="4">
            <h4>{month} months</h4>
            </MDBCol>
            <MDBCol md="4">     
            <h4>{day} days</h4>
            </MDBCol>
        </MDBRow>
        <h4 className="text-center py-3">
            {nowbirthday} days remain for your birthday
        </h4>
           
           
          
        </MDBContainer>
        </>
    )
}
export default Calander;