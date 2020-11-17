import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.sass']
})
export class DirectivasComponent implements OnInit {
  loading: boolean = true
  pestana: string = ""
  mostrarCuadrado = false

  constructor() { }
    
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  cambiarPestana(pestana: string){
    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado
  }
}
