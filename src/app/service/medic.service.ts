import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medic } from '../model/medic';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicService {
  private url: string = `${environment.HOST}/medic`;
  //variable reactiva
  /* public medicChange = new Subject<Medic[]>; */
  private medicChange = new Subject<Medic[]>();
  private messageChange = new Subject<string>();

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Medic[]>(this.url);
  }
  findById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  save(medic: Medic) {
    return this.http.post(this.url, medic);
  }

  update(medic: Medic) {
    return this.http.put(`${this.url}/${medic.idMedic}`, medic);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  //cuando el sucject es privado
  setMedicChange(data: Medic[]) {
    this.medicChange.next(data);
  }
  getMedicChange() {
    return this.medicChange.asObservable();
  }
  setMesaggeChange(data: string) {
    this.messageChange.next(data);
  }
  getMesaggeChange() {
    return this.messageChange.asObservable();
  }
}
