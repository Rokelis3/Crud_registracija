import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthResponseData } from '../models/authResponseData';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn=false;
  public user?:AuthResponseData;
  private key="AIzaSyDO2fMiwmJPE7QV3bYilCG3Ov6cxhnEgi4";
  public userUpdated=new EventEmitter();

  constructor(private http:HttpClient) { }

  private authAPICall(url:string, email:String, password:String){

    return this.http.post<AuthResponseData>(url,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(  tap(  (response)=>{
      this.isLoggedIn=true;
      this.user=response;
      this.userUpdated.emit();
    }));

  }

  public register(email:String,password:String){
    return this.authAPICall("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.key,email,password);
  }

  public login(email:String,password:String){
    return this.authAPICall("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.key,email,password);
  }

  public changePassword(password:String){
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:update?key="+this.key,{
      idToken:this.user?.idToken,
      password:password,
      returnSecureToken:true
    })
  }

  public logout(){
    this.isLoggedIn=false;
    this.user=undefined;
    this.userUpdated.emit();
  }


}