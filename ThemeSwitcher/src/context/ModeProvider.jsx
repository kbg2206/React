import React, { useState } from "react";
import ModeContext from "./ModeContext";

const ModeProvider = ({children}) => {
    const [mode , setMode] = useState("light")
    return(
        <ModeContext.Provider value={{mode, setMode}}>
        {children}
        </ModeContext.Provider>
    )
}


export default ModeProvider;