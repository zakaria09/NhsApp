import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService, 
              public angularFireAuth: AngularFireAuth,
              public user: UserService) { }

  ngOnInit() {
  }

  userInfo () {
    return this.angularFireAuth.auth.currentUser;
  }

  onSignin(forms: NgForm) {
    const email = forms.value.email;
    const password = forms.value.password;
    this.authService.signinUser(email, password)
  }

  showUser() {
    // show user 
    return console.log(this.angularFireAuth.auth.currentUser);
  }
}
