import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Medic } from 'src/app/model/medic';
import { MedicService } from 'src/app/service/medic.service';

@Component({
  selector: 'app-medic-dialog',
  templateUrl: './medic-dialog.component.html',
  styleUrls: ['./medic-dialog.component.css'],
})
export class MedicDialogComponent implements OnInit {
  medic: Medic;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Medic,
    private _DialogRef: MatDialogRef<MedicDialogComponent>,
    private medicService: MedicService
  ) {}
  ngOnInit(): void {
    this.medic = { ...this.data };
  }

  close() {
    this._DialogRef.close();
  }
  operate() {
    if (this.medic != null && this.medic.idMedic > 0) {
      this.medicService
        .update(this.medic, this.medic.idMedic)
        .pipe(switchMap((_) => this.medicService.findAll()))
        .subscribe((data) => {
          this.medicService.setMedicChange(data);
          this.medicService.setMesaggeChange('Updated!!');
        });
    } else {
      this.medicService
        .save(this.medic)
        .pipe(switchMap((_) => this.medicService.findAll()))
        .subscribe((data) => {
          this.medicService.setMedicChange(data);
          this.medicService.setMesaggeChange('Saved!!');
        });
    }
    this.close();
  }
}
