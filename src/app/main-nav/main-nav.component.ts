import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../auth/user.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  
  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth, public user: UserService) {}

  onLogout() {
    this.user.logout();
  }


  
  }
