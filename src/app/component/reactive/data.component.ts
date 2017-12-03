import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors} from '@angular/forms';
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";
import {ReactiveValidators} from "./reactive.validators";

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
                                      Validators.minLength(3),
                                      ReactiveValidators.noCalderon
                                    ]),
      email: new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                 ]),
      password1: new FormControl(),
      password2: new FormControl(),
      hobbies: new FormArray([
        new FormControl('Run', Validators.required)
      ])
    });

    // can set value - real scenario would set value from API and data service
    // this.form.setValue(this.user);

    this.form .controls['password1'].setValidators([
      Validators.required,
      (control) => ReactiveValidators.notEqual(control as FormControl, this.password2.value as string)
    ]);

    this.form .controls['password2'].setValidators([
      Validators.required,
      (control) => ReactiveValidators.notEqual(control as FormControl, this.password1.value as string)
    ]);


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

  get password1() {
    return this.form.get('password1');
  }

  get password2() {
    return this.form.get('password2');
  }

  addHobby() {
    const hobbies = (<FormArray>this.hobbies).controls;

    hobbies.push(
      new FormControl('', Validators.required)
    );
  }

  save() {
    console.log(this.form.value);
    // this.form.reset(this.user); // reset form
  }

}
