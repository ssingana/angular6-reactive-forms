import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // regForm = new FormGroup({
  //   userName : new FormControl('sreeni'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl('AP'),
  //     postalCode : new FormControl('')
  //   })
  // });

  // loadApiData(){
  //   this.regForm.setValue({
  //     userName : 'sreeni',
  //     password : 'test',
  //     confirmPassword : 'test',
  //     address : {
  //       city : 'City',
  //       state : 'state',
  //       postalCode : '981099'
  //     }
  //   });    
  // }

  // loadAdressData(){
  //   this.regForm.patchValue({
  //     address : {
  //       city : 'City',
  //       state : 'state',
  //       postalCode : '981099'
  //     }
  //   });    
  // }
}
