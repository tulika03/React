import {createContext} from "react"

const UserContext = createContext({
    "loggedInUser": "Default User",
    "isLoggedIn": true
});

export default UserContext;