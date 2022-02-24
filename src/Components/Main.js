import React from 'react';

import UserHOC from "./UserHOC";

const Main =(props)=>{
    console.log(props.value, "**PROPS**");
    return(
        <div>
            <h1>HEADING</h1>
        </div>
    )
}

export default UserHOC(Main)