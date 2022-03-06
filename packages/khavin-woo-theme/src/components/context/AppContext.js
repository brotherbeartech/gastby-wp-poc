import React, { useState, useEffect } from "react";

export const AppContext = React.createContext([{}, () => { }])

export const AppProvider = (props) => {
    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}
