import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  user: any = {
    firstName: null,
    lastName: null,
    email: null
  };

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('ngForm ' + form);

    console.log('value ' + form.value);
    console.log('user ' + this.user);
  }

}
