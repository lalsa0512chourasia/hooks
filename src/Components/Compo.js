import React, { useState, useEffect } from 'react';

const Compo = () => {
    const [data, setData] = useState('Lalsa')
    const [count, setCount] = useState(0)

    useEffect(()=>{
         console.log("This is my  useEffect");
    }, [])

    const handlecount = () => {
        setCount(count + 1)
    }

    const handlechg = () => {
        setData("Chourasia")
    }
    return (
        <>
        <h1>UseState</h1>
            My name is {data}
            <button onClick={handlechg}>Change my name</button>


<h1>UseEffect</h1>
            <h3>{count}</h3>
            <button onClick={handlecount}>Change my name</button>
            
              </>
    )
}
export default Compo;