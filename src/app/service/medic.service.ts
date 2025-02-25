import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medic } from '../model/medic';
import { Subject } from 'rxjs';
import { GenericServicesService } from './generic-services.service';

@Injectable({
  providedIn: 'root',
})
export class MedicService extends GenericServicesService<Medic> {
  /* private url: string = `${environment.HOST}/medic`; */
  //variable reactiva
  /* public medicChange = new Subject<Medic[]>; */
  private medicChange = new Subject<Medic[]>();
  private messageChange = new Subject<string>();
  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/medic`);
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
