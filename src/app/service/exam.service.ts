import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { GenericServicesService } from './generic-services.service';
import { Exam } from '../model/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService  extends GenericServicesService<Exam>{
 private examChange = new Subject<Exam[]>();
  private messageChange = new Subject<string>();

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/exam`);
  }

   //cuando el sucject es privado
    setMedicChange(data: Exam[]) {
      this.examChange.next(data);
    }
    getMedicChange() {
      return this.examChange.asObservable();
    }
    setMesaggeChange(data: string) {
      this.messageChange.next(data);
    }
    getMesaggeChange() {
      return this.messageChange.asObservable();
    }
}
