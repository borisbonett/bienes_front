
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const modulesList = [
  ButtonModule,
  TableModule,
  TooltipModule,
  DialogModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [],
  imports: [
    modulesList
  ],
  exports: [
    modulesList
  ]
})
export class PrimengModule { }