import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { User } from '../models/user.model';
import { UserGrants } from '../models/usergrants.model';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
      userToLogin: UserGrants = new UserGrants('', '' , 'password');
    constructor(public router: Router, private loginService: LoginService) {}
     ngOnInit() {}

    onLoggedin() {
        console.log(this.userToLogin);
        this.loginService.loginUser(this.userToLogin).subscribe((res) => {
            console.log(res);
            localStorage.setItem('user', this.userToLogin.Email)
            localStorage.setItem('id_token', res.access_token);
            localStorage.setItem('isLoggedin', 'true');
        });
        localStorage.setItem('user', this.userToLogin.Email);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['dashboard']);
    }
}
