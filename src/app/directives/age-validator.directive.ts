import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[AgeValidator]',
  providers:[
    {
    provide:NG_VALIDATORS,
    useExisting:AgeValidatorDirective,
    multi:true
  }
]
})
export class AgeValidatorDirective implements Validator {

  constructor() { }
  validate(control: FormControl): ValidationErrors | null {
    let year : number=control.value;

    let age =(new Date().getFullYear()-year);
    console.log(age);
    if(age<12 || age>18){
      return {"error": 'Amžius'}
  }
return null;
  }

}
