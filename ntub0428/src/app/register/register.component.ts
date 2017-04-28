import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _http:HttpService) { }

  account:Object={
    Email:"",
    Password:"",
    ConfirmPassword:""
  }

  register(){
    console.log(this.account)
    this._http.postData("http://localhost:49403/api/Account/Register",this.account).subscribe(
      data=>{console.log(data)},
      error=>{console.log(error)},
      ()=>{}
    )
  }
  ngOnInit() {
  }

}
