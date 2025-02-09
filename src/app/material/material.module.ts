import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatTableModule,MatButtonModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatMenuModule,MatDividerModule,NoopAnimationsModule]
})
export class MaterialModule {}
