import * as firebase from 'firebase/app';
import 'firebase/auth';
import {AngularFireAuth} from 'angularfire2/auth';

export class AuthService {
    authState: any = null;



    signupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )
            .catch(
                error =>console.log(error) 
            )
    }
}