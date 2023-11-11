
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';


export const modulesList = [
  ButtonModule,
  TableModule,
  TooltipModule,
  DialogModule,
  BrowserAnimationsModule,
  InputTextModule,
  CheckboxModule,
  RadioButtonModule,
  DropdownModule
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