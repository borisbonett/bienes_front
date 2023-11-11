import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.component.html',
  styleUrls: ['./pisos.component.scss']
})
export class PisosComponent implements OnInit{

  public arrPisos: any[] = [];
  public visible: boolean = false;

  public position: any;
  public arrEdificio: any[] = [];

  public seleccionaEdificio:any;
  public numeroPiso:any;
  public direccion:any;
  public postal:any;
  public valor:any;
  public estado:any;

  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.getPisos();
    this.getEdificio();
  }


  public getPisos(): void {
    this.apiService.get(`piso`).subscribe((res:any) => {
      console.log(res);
      this.arrPisos = res;
    }, (err:any) => {
      console.log(err);
    });
  }

  public getEdificio(): void {
    this.apiService.get(`edificio`).subscribe((res:any) => {
      console.log(res);
      this.arrEdificio = res;
    }, (err:any) => {
      console.log(err);      
    })
  }

  public showDialog(position: string): void {

    this.seleccionaEdificio = undefined;
    this.numeroPiso = undefined;
    this.direccion = undefined;
    this.postal = undefined;
    this.valor = undefined;
    this.estado = undefined;

    this.position = position;
    this.visible = true;
  }

  public sendPisos(): void {

    let validarSoloNumeroPostal = /^\d+$/.test(this.postal);
    let validarSoloNumeroValor = /^\d+$/.test(this.valor);
    let validarSoloNumeroEstado = /^\d+$/.test(this.estado);

    console.log(this.seleccionaEdificio);

    if((this.numeroPiso || this.direccion ||  this.postal || this.valor || this.estado) == undefined ) return console.log('Todos los campo son obligatorios menos ID piso');
    
    if(!validarSoloNumeroPostal || !validarSoloNumeroValor || !validarSoloNumeroEstado  ) return console.log('solo se permite numeros');

    let body = {
      numero: this.numeroPiso,
      direccion: this.direccion,
      postal: parseInt(this.postal),
      valor: parseInt(this.valor),
      id_edificio: this.seleccionaEdificio == undefined ? null : this.seleccionaEdificio,
      estado: parseInt(this.estado)
    };

    console.log(body);

    this.apiService.post(body, `piso`).subscribe((res:any) => {
      console.log(res);
      this.seleccionaEdificio = undefined;
      this.numeroPiso = undefined;
      this.direccion = undefined;
      this.postal = undefined;
      this.valor = undefined;
      this.estado = undefined;
      this.visible = false;
      this.getPisos();
    }, (err:any) => {
      console.log(err);
    })
  }

}
