import {  Injectable } from '@angular/core';
import { of as observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { RouterLink } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    uid = this.afAuth.authState.pipe(
        map(authState => {
            if(!authState) {
                return null;
            } else {
                return authState.uid;
            }
        })
    );
    isAdmin = observable(true);
    constructor (private afAuth: AngularFireAuth) {}

    login() {
        this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
