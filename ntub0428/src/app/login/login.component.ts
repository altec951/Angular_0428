import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any;
  account:Object = {
    Email:"",
    Password:""
  }

  constructor(
    private _http: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    if (this.token) {
      sessionStorage.setItem('token', this.token);
      this.router.navigate(['/detail']);
    }
  }

  login(){
    window.location.href = "http://localhost:49403/register.html"
  }

}
