import { useReducer } from 'react';


const reducer = (state, action) => {
    console.log("state", state);
    console.log("Action", state);
    return state;
  }

  export const UseReducer= ()=>{

  const [state, dispatch] = useReducer(reducer, { count: 0 });

return(
    <>
     <div>
        <h1>UseReducer</h1>
      <h1>{state.count}</h1>
      
        <button onClick={() => {
          dispatch({ type: "INCREAMENT" });
        }}>Increase</button>
      </div>
    </>
)
  }