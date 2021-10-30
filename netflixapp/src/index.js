import React from "react";
import ReactDOM from "react-dom";
import Card  from "./Cards";
import Sdata from "./Seriesdata";
import "./index.css"




// console.log(Sdata[0].sname);




ReactDOM.render(
  <>
  
  <h1 className="heading_style">List of Top 7 Netflix Series 2021</h1>
  {Sdata.map(function ncard(val){
    return(
    <Card
    key = {val.id} 
    imgsrc={val.imgsrc} 
   title={val.title} sname={val.sname} 
   links={val.links} />
  );
  })}

   

 

   {/* <Card imgsrc={Sdata[1].imgsrc} 
   title={Sdata[1].title} sname={Sdata[1].sname} 
   links={Sdata[1].links} />

  <Card imgsrc={Sdata[2].imgsrc} 
   title={Sdata[2].title} sname={Sdata[2].sname} 
   links={Sdata[2].links} />  

  <Card imgsrc={Sdata[3].imgsrc} 
   title={Sdata[3].title} sname={Sdata[3].sname} 
   links={Sdata[3].links} />

   <Card imgsrc={Sdata[4].imgsrc} 
   title={Sdata[4].title} sname={Sdata[4].sname} 
   links={Sdata[4].links} />  */}


   
   </>,

  document.getElementById("root")




);