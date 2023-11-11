import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PisosComponent } from './components/pisos/pisos.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';

const APP_PROVIDERS = [
  ApiService
];

@NgModule({
  declarations: [
    AppComponent,
    PisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
