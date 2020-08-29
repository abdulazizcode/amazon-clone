import React, {createContext,useContext, useReducer} from "react";
export const  StateContext = createContext();

export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        </StateContext.Provider>
);
//THIS IS HOW WE USE IT INSIDE THE COMPONENT
export const useStateValue = () => useContext(StateContext);