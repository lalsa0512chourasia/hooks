import React ,{useState, createContext} from 'react'

export const NoteContext = createContext();

export const DataProvider =(props)=>{
    const [data, setData] = useState([
        {
        id:1,
        name:"lalsa",
        age: 22
    },
    {
        id:2,
        name:"pari",
        age: 2
    },
]);
 return(
   <NoteContext.Provider value={[data, setData]}>
       {props.children}
   </NoteContext.Provider>
 )
}

