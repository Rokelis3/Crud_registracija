import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public password:String="";

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

 changePassword(){
   this.auth.changePassword(this.password).subscribe(()=>{
     this.router.navigate(["/"]);
   });

 }
}
