import {firebase, googleProvider} from '../firebase/firebase';

export const initLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleProvider)
    }
}

export const initLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const login = (uid) => ({type: 'LOG_IN', uid})
export const logout = () => ({type: 'LOG_OUT'})