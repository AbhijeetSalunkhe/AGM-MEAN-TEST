import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoffeeType } from '../models/coffee-type.model';
import { AddOn } from '../models/add-on.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<any> {
    const url = `${this.apiUrl}/api/coffee`;
    return this.http.get<CoffeeType[]>(url)
  }

  getAddon(): Observable<any> {
    const url = `${this.apiUrl}/api/addon`;
    return this.http.get<AddOn[]>(url)
  }

  calTotalPrice(order: any): Observable<any> {
    const url = `${this.apiUrl}/api/calTotalPrice`;
    // return this.http.post<AddOn[]>(url)
    return this.http.post<{ total: number }>(url, order)
  }
}
