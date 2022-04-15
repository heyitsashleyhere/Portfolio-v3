import React from "react";

export const LandingContext = React.createContext(null);

function LandingContextProvider({children}) {

    const landingContextValues = {

    }
    return (
        <LandingContext.Provider value={landingContextValues}>
            {children}
        </LandingContext.Provider>
    )
}

export default LandingContextProvider