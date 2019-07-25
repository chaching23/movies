import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: Router) { }
  newProd = {title: "", review: {name:"", stars:"",description: ""}}
  err:any;

  ngOnInit() {
  }

  onSubmit(){
    console.log('hitting create');
    this._httpService.create(this.newProd).subscribe(data => {
      if(data['review']){
        this._route.navigate(['/'])
      }
      else{
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }





}
