import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

interface Usuarios{
  nombre:string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  formularioCreado: FormGroup;
  isnew: boolean = true;
  posicionEditar: number = -1;
  usuarios: Array<Usuarios> = new Array<Usuarios>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioCreado = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])],
    })
  }

  agregar() {
    this.usuarios.push(this.formularioCreado.value as Usuarios)
    this.formularioCreado.reset()
  }

  editar(){
    this.usuarios[this.posicionEditar].nombre = this.formularioCreado.value.nombre;
    this.usuarios[this.posicionEditar].email = this.formularioCreado.value.email;
    this.usuarios[this.posicionEditar].password = this.formularioCreado.value.password;
    this.formularioCreado.reset();
    this.isnew = true;
    this.posicionEditar = -1;

  }

  editarUsuario(posicion: number) {
    this.formularioCreado.setValue({
      nombre: this.usuarios[posicion].nombre,
      email: this.usuarios[posicion].email,
      password: this.usuarios[posicion].password,
    })
    this.posicionEditar = posicion;
    this.isnew = false;
  }

  eliminarUsuario(posicion: number) {
    this.usuarios.splice(posicion, 1)
  }

}
