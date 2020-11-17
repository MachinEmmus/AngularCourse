import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;
  excelencia: boolean;
  
  constructor(){
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.excelencia = this.excelencia;
  }
}

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.sass']
})
export class ExamplesComponent implements OnInit {
  alumno: Alumno = new Alumno()
  listadoAlumno: Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listadoAlumno.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      excelencia: this.alumno.excelencia,
    })
    this.alumno.nombre = "";
    this.alumno.apellido = "";
    this.alumno.excelencia = false;

  }
}
