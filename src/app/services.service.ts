import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  Url:string='http://127.0.0.1:5000/api/v1/';
  constructor(private http: HttpClient) { }

  getLinks(){
    console.log('SERVICE CALLED')
    return this.http.get(this.Url);
  }

  getDetails(name){
    console.log('getDetails Service Called')
    return this.http.get(`${this.Url}${name}`);
  }

  userRegistration(formData){
    console.log('userRegistration method called') 
    console.log(formData)
    return this.http.post("http://127.0.0.1:5000/users/v1/",formData);
  }

  userLogin(email,password){
    console.log('userLogin method called')
    console.log(email,password) 
    const url = "http://127.0.0.1:5000/users/v1/"
    return this.http.get(`${url}${email}/${password}`);
  }

  userAccountdelete(){
    console.log('userAccountdelete method called')
  }

  userUpdatedetails(){
    console.log('userUpdatedetails method called')
  }


}
