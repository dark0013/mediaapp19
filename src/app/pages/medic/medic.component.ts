import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Medic } from 'src/app/model/medic';
import { MedicService } from 'src/app/service/medic.service';
import { MedicDialogComponent } from './medic-dialog/medic-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css'],
})
export class MedicComponent implements OnInit {
  dataSource: MatTableDataSource<Medic>;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'cmp',
    'photo',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private medicService: MedicService,
    private _matDialog: MatDialog,
    private _snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.medicService.findAll().subscribe((data) => {
      this.crateTable(data);
    });

    this.medicService
      .getMedicChange()
      .subscribe((data) => this.crateTable(data));

    this.medicService.getMesaggeChange().subscribe((data) => {
      this._snackbar.open(data, 'INFO', { duration: 2000 });
    });
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  crateTable(data: Medic[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(medic?: Medic) {
    this._matDialog.open(MedicDialogComponent, {
      width: '250px',
      data: medic,
      disableClose: true,
    });
  }

  delete(idMedic: number) {
    this.medicService
      .delete(idMedic)
      .pipe(
        switchMap((_) => {
          return this.medicService.findAll();
        })
      )
      .subscribe((data) => {
        this.medicService.setMedicChange(data);
        this.medicService.setMesaggeChange('Deleted!!!');
      });
  }
}
