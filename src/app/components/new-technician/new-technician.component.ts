import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      'email':new FormControl(null, [Validators.required, Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'klass':new FormControl(null, [Validators.required, Validators.min(6), Validators.max(12)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.technicianForm.value);
    this.technicianForm.reset();
  }

}