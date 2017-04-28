import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _http:HttpService) { }

  ngOnInit() {
  }

  getData(){
    this._http.getData("http://localhost:49403/api/Test",sessionStorage.getItem("token")).subscribe(
      data=>{console.log(data)},
      error=>{console.log(error)},
      ()=>{}
    )
  }

}
