import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTechnicianService } from 'src/app/services/new-technician.service';


@Component({
  selector: 'app-new-technician',
  templateUrl: './new-technician.component.html',
  styleUrls: ['./new-technician.component.css']
})
export class NewTechnicianComponent implements OnInit {
  public technicianForm:FormGroup;
  
  constructor(private newTechniacianForm:NewTechnicianService) { 
    this.technicianForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'klass':new FormControl(null, [Validators.required, Validators.min(6), Validators.max(12)]),
      'alergie':new FormArray([]),
      'club':new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.technicianForm.value);
    this.newTechniacianForm.addRegistration(this.technicianForm.value).subscribe();
    this.technicianForm.reset();
  }

  addAlergie(){
    const input=new FormControl(null, Validators.required);
    (<FormArray>this.technicianForm.get('alergie')).push(input);

  }

  get alergies(){
    return (<FormArray>this.technicianForm.get('alergie')).controls;
  }

  addClub(){
    const club=new FormGroup({
      year:new FormControl(null, Validators.required),
      clubName:new FormControl(null, Validators.required),
      typeOfClub:new FormControl(null, Validators.required)
    })
    return (<FormArray>this.technicianForm.get('club')).push(club);
  }

  get clubs(){
    return (<FormArray>this.technicianForm.get('club')).controls;
  }

  deleteAlergie(){
   (<FormArray>this.technicianForm.get('alergie')).removeAt(-1);
  }

  toFormGroup(el:AbstractControl): FormGroup{
    return <FormGroup>el;
  }
  

  
}