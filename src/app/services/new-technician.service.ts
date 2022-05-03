import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClubRegistation } from '../models/clubRegistration';


@Injectable({
  providedIn: 'root'
})
export class NewTechnicianService {

  private readonly url:String="https://vaikuregistracijastovyklai-default-rtdb.europe-west1.firebasedatabase.app/";


  constructor(private http:HttpClient) { }

  public addRegistration(registration:ClubRegistation){
    return this.http.post<{name:string}>(this.url+"/newTechnician.json",registration);
  }
}
