import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-generalforms',
  templateUrl: './generalforms.component.html',
  styleUrls: ['./generalforms.component.css']
})
export class GeneralformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  title = 'app';
  regForm = new FormGroup({
    userName : new FormControl('General Forms'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl('AP'),
      postalCode : new FormControl('')
    })
  });

  loadApiData(){
    this.regForm.setValue({
      userName : 'sreeni',
      password : 'test',
      confirmPassword : 'test',
      address : {
        city : 'City',
        state : 'state',
        postalCode : '981099'
      }
    });    
  }

  loadAdressData(){
    this.regForm.patchValue({
      address : {
        city : 'City',
        state : 'state',
        postalCode : '981099'
      }
    });    
  }

}
