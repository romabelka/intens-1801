import firebase from 'firebase/app'
import 'firebase/auth'
import {firebaseConfig} from '../config'

class ApiService {
    constructor(fbConfig) {
        firebase.initializeApp(fbConfig)
        this.fb = firebase
    }

    signIn = (email, password) => this.fb.auth().signInWithEmailAndPassword(email, password)
    signUp = (email, password) => this.fb.auth().createUserWithEmailAndPassword(email, password)

    onAuthChange = (callback) => this.fb.auth().onAuthStateChanged(callback)
}

export default new ApiService(firebaseConfig)
