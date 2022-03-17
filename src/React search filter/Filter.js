import React,{useState} from 'react'
import Data from'./db.json'

const Filter = () => {
  const[search,setSearch]=useState("");
  return(
     <center>
       <div> 
         <h4>Enter Your City:</h4>
         <input value={search} onChange={(e)=>setSearch(e.target.value)}
           type="text" placeholder='City Name'/><br/> <br/>
          {Data.Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=> { 
           return(
           <div style={{"border":"1px solid black","padding":"10px","margin":"10px","max-width":"70%"}} >
             {city.name}
             </div>
           )})}
       </div>
     </center>
   )
 }

export default Filter
