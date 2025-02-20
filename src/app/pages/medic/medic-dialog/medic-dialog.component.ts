import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Medic } from 'src/app/model/medic';

@Component({
  selector: 'app-medic-dialog',
  templateUrl: './medic-dialog.component.html',
  styleUrls: ['./medic-dialog.component.css'],
})
export class MedicDialogComponent implements OnInit {
  medic: Medic;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Medic,
    private _DialogRef: MatDialogRef<MedicDialogComponent>
  ) {}
  ngOnInit(): void {
    this.medic = { ...this.data };
  }

  close() {
    this._DialogRef.close();
  }
  operate() {}
}
