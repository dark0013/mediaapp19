import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicDialogComponent } from './medic-dialog.component';

describe('MedicDialogComponent', () => {
  let component: MedicDialogComponent;
  let fixture: ComponentFixture<MedicDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicDialogComponent]
    });
    fixture = TestBed.createComponent(MedicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
