import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-technician',
  templateUrl: './new-technician.component.html',
  styleUrls: ['./new-technician.component.css']
})
export class NewTechnicianComponent implements OnInit {
  public technicianForm:FormGroup;
  
  constructor() { 
    this.technicianForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'klass':new FormControl(null, [Validators.required, Validators.min(6), Validators.max(12)]),
      'alergie':new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.technicianForm.value);
    this.technicianForm.reset();
  }

  addAlergie(){
    const input=new FormControl(null, Validators.required);
    (<FormArray>this.technicianForm.get('alergie')).push(input);

  }

  get alergies(){
    return (<FormArray>this.technicianForm.get('alergie')).controls;
  }

  deleteAlergie(){
   (<FormArray>this.technicianForm.get('alergie')).removeAt(-1);
  }
}