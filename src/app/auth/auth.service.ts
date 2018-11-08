import * as firebase from 'firebase/app';
import 'firebase/auth';

export class AuthService {
    signupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }
}