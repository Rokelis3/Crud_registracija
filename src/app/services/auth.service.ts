import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../models/authResponseData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public register(email:String,password:String){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDO2fMiwmJPE7QV3bYilCG3Ov6cxhnEgi4',{
      email:email,
      password:password,
      returnSecureToken:true
    });
  }
}