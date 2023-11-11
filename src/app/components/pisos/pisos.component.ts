import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.component.html',
  styleUrls: ['./pisos.component.scss']
})
export class PisosComponent implements OnInit{

  public arrPisos:any[] = [];
  public visible:boolean = false;

  public position:any;

  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.getPisos();
  }


  public getPisos(): void {
    this.apiService.get(`piso`).subscribe((res:any) => {
      console.log(res);
      this.arrPisos = res;
    }, (err:any) => {
      console.log(err);
    });
  }

  public showDialog(position: string): void {
    this.position = position;
    this.visible = true;
  }

  public sendPisos(): void {
  }

}
