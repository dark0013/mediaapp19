import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Subject } from 'rxjs';
import { GenericServicesService } from './generic-services.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService extends GenericServicesService<Patient> {
  //private url: string = `${environment.HOST}/patients`;
  //variable reactiva
  /* public patientChange = new Subject<Patient[]>; */
  private patientChange = new Subject<Patient[]>();
  private messageChange = new Subject<string>();

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/patients`);
  }

  //haci se lo maneja cuando no se refactoriza el codigo usando generico
  /*
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Patient[]>(this.url);
  }
  findById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  save(patient: Patient) {
    return this.http.post(this.url, patient);
  }

  update(patient: Patient) {
    return this.http.put(`${this.url}/${patient.idPatient}`, patient);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }*/
  //cuando el sucject es privado
  setPatientChange(data: Patient[]) {
    this.patientChange.next(data);
  }
  getPatientChange() {
    return this.patientChange.asObservable();
  }
  setMesaggeChange(data: string) {
    this.messageChange.next(data);
  }
  getMesaggeChange() {
    return this.messageChange.asObservable();
  }
}
