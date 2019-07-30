import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

    }

  ngOnInit() {
    // const currentRoute = this.router.url;

    // if (currentRoute === '/users') {
    //   this.router.navigate(['/users']);
    // } else {
    //   this.router.navigate(['/flowers']);
    // }
  }

  home() {
    this.router.navigate(['']);
  }

  userManagement() {
    this.router.navigate(['/users']);
  }

  userRoleManagement() {
    this.router.navigate(['/userRoles']);
  }

  filmeManagement() {
    this.router.navigate(['/filme']);
  }

  comentariiManagement() {
    this.router.navigate(['/comentarii']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
