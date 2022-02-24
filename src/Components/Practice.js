//React context is a way to manage state globally
// basically parent compon. hold the state var.
//  whenever we want to access in our child compon.
//but with the help of usecontext we can use state variables in any level of component


// import './App.css';
// import { DataProvider } from './Components/NoteContext'; 
// import { Compo1 } from './Components/Compo1';

// function App() {
//   return (
//   <DataProvider>
//       <div className="App">
//        <Compo1/>
//        </div>
//   </DataProvider>
//   );
// }

// export default App;


// import React, { useState, createContext } from 'react';   

// export const NoteContext = createContext();

// export const DataProvider = (props) => {
//     const [data, setData] = useState([
//         {
//             id: 1,
//             name: "lalsa",
//             age: 20
//         },
//         {
//             id: 2,
//             name: "pari",
//             age: 12
//         }
//     ])

//     return (
//         <NoteContext.Provider value={[data, setData]}>
//               {props.children}
//         </NoteContext.Provider>
//     )
// }


// import React, {useContext} from 'react';
// import { NoteContext } from './NoteContext';

// export const Compo1=()=>{
//   const [data] = useContext(NoteContext)
//   console.log(data);

//    return(
//        <>
//          {data.map((item)=>{
//              return(
//                  <div key={item.id}>
//                 My name is {item.name}
                  
//                  </div>
//              )
//          })}
//      {/* My name is {data[0].name} */}
//        </>
//    )
// }