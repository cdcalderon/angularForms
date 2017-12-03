import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form: FormGroup;

  user: any = {
    firstName: 'Carlos',
    lastName: 'Calderon',
    email: 'cdcalderon@gmail.com'
    // hobbies: ['Run', 'Play Tennis', 'Reading']
  };

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                     ]),
      lastName: new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]),
      email: new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                 ]),
      hobbies: new FormArray([
        new FormControl('Run', Validators.required)
      ])
    });

    // can set value - real scenario would set value from API and data service
    // this.form.setValue(this.user);

  }

  ngOnInit() {
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get hobbies() {
    return this.form.get('hobbies');
  }

  addHobby() {
    (<FormArray>this.hobbies).push(
      new FormControl('', Validators.required)
    );
  }

  save() {
    console.log(this.form.value);
    this.form.reset(this.user); // reset form
  }

}
