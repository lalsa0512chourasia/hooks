import React, {useContext} from 'react';
import { NoteContext } from './NoteContext';

export const Compo1=()=>{
  const [data] = useContext(NoteContext)
  console.log(data);

   return(
       <>
       <h1>UseContext</h1>
         {data.map((item)=>{
             return(
                 <div key={item.id}>
                My name is {item.name}
                  
                 </div>
             )
         })}
     {/* My name is {data[0].name} */}
       </>
   )
}