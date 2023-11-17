import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getUsers()
  {
    return this.http.get('https://retoolapi.dev/HBu5Up/data');
  }

  insertUser(user : any)
  {
    return this.http.post('https://retoolapi.dev/HBu5Up/data',user);
  }
}
