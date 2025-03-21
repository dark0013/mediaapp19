import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { GenericServicesService } from './generic-services.service';
import { Specialty } from '../model/Specialty';


@Injectable({
  providedIn: 'root'
})
export class SpecialtyService extends GenericServicesService<Specialty>{
  private specialtyChange = new Subject<Specialty[]>();
  private messageChange = new Subject<string>();

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/specialty`);
  }

   //cuando el sucject es privado
    setMedicChange(data: Specialty[]) {
      this.specialtyChange.next(data);
    }
    getMedicChange() {
      return this.specialtyChange.asObservable();
    }
    setMesaggeChange(data: string) {
      this.messageChange.next(data);
    }
    getMesaggeChange() {
      return this.messageChange.asObservable();
    }

}
