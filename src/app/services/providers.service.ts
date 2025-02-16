import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../models/providers';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  url = '../../assets/providers.json';

  providers: Provider[] = [];

  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get<Provider[]>(this.url);
  }

  getProvider(id: number) {
    return this.http.get<Provider>(`${this.url}/${id}`);
  }
}
