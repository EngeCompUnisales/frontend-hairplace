import React, { createContext, useReducer } from "react";
import { UserReducer, initalState } from '../reducers/UserReducer';
export const UserContext = createContext();

export default ({ children }) => {
    const [state, dispatch] = useReducer(initalState, UserReducer);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}