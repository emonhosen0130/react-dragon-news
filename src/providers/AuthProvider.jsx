import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

 const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email,password);
 }

    const authInfo ={
        user, 
        createUser
    }

    return (
        <AuthContext.provider value = {authInfo}>
            {children}
        </AuthContext.provider>
    );
};

export default AuthProvider;