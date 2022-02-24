import React from 'react';
function UserHOC(WrappComponent) {
    // return a new component
    const WrappingComponent = () => {
        const user = { id: 1, name: "lalsa" }
    return(
    <div>
        <WrappComponent value={user} />
    </div >
    )
    
}
return WrappingComponent

 }


export default UserHOC