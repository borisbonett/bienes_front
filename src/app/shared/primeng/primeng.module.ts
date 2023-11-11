
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

export const modulesList = [
  ButtonModule,
  TableModule
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