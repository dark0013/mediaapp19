import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenericServicesService<T> {
  constructor(
    protected http: HttpClient,
    @Inject('url') protected url: string
  ) {}

  findAll() {
    return this.http.get<T[]>(this.url);
  }
  findById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  save(t: T) {
    return this.http.post(this.url, t);
  }

  update(t: T, id: number) {
    return this.http.put(`${this.url}/${id}`, t);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
