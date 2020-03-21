import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  
private getdetailsurl="http://localhost:3000/getdetails"
private getbynameurl="http://localhost:3000/getbyname"
private editurl="http://localhost:3000/update"
private deleteurl="http://localhost:3000/delete"
  constructor(private http:HttpClient) { }
  getdetails():Observable<any>{
    return this.http.get<any>(this.getdetailsurl);
  }
  getbyname(firstname):Observable<any>{
    return this.http.get<any>(this.getbynameurl,firstname);
  }
  edituser(firstname){
    return this.http.put<any>(this.editurl,firstname);
  }
  deleteuser(firstname){
   return this.http.delete<any>(this.deleteurl,firstname);
 }
}


