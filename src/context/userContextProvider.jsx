/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./userContext";

const  UserContextProvider  = ({children})=> {
    const [user, setUser] = useState(null);
    console.log("User State:", user);
    
    return (
        <UserContext.Provider  value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
