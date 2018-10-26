import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  regFbForm = this.fb.group({
    userName : ['Reactive Forms'],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : ['999999']
    })
  });

  ngOnInit() {
  }

}
