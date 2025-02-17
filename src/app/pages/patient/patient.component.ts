import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  //definimos el objeto la cual se llenara la tabla
  dataSource: MatTableDataSource<Patient>;
  //definimos las columnas de la tabla
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'dni',
    'actions',
  ];

  //@ViewChild => captura un componente del html
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //agregamos la inyección del metodo obtenido del services
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.patientChange.subscribe((data) => {
      this.crateTable(data);
    });

    this.patientService.findAll().subscribe((data) => {
      this.crateTable(data);
    });
  }
  //acción del filtro
  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  crateTable(data: Patient[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
