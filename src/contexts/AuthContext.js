import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    async function signup(email, password, fname, lname) {
        await auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCred) => {
                console.log(userCred);
                db.collection("users").doc(userCred.user.uid).set({
                    firstname: fname,
                    lastname: lname,
                    email: userCred.user.email,
                    uid: userCred.user.uid,
                    isAdmin: false,
                });
            });
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubsribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
