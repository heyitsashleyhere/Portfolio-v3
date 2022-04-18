import React from "react";
import { useState } from "react";

export const LandingContext = React.createContext(null);

function LandingContextProvider({children}) {
    const [isTheme, setIsTheme] = useState(true);

    const landingContextValues = {
        isTheme, setIsTheme
    }
    return (
        <LandingContext.Provider value={landingContextValues}>
            {children}
        </LandingContext.Provider>
    )
}

export default LandingContextProvider