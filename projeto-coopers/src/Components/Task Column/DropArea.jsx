import React, { useState } from "react";

const DropArea = () =>{
    const [ShowDrop, SetShowDrop] = useState(false)
    return(
        <section 
        onDragEnter={()=> SetShowDrop(true)}
        onDragLeave={()=> SetShowDrop(false)}
        
        >
            Drop Here
        </section>
    )
}

export default DropArea;
