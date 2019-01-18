import { Component, OnInit } from '@angular/core';
import {Alumno} from '../modelos/alumno.modelo';
@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
 alumno1 = new Alumno(1, 'David', 'García Cabeza', 'De la terreta');

 public alumnos: Array<Alumno> = [
   {id: 1 , nombre: 'David', apellidos: 'Díaz de vivar', ciudad: 'Señor Conquistador de Valencia'},
   {id: 2 , nombre: 'Luis Carlos', apellidos: 'Añez', ciudad: 'Terreta'},
   {id: 3 , nombre: 'Alexandre', apellidos: 'Sanz', ciudad: 'Terreta'},
   {id: 4 , nombre: 'Carlos Damian', apellidos: 'García Carmona', ciudad: 'Terreta'},
   {id: 5 , nombre: 'Angel', apellidos: 'Rios', ciudad: 'Terreta'},
   {id: 6 , nombre: 'CHIMUELO', apellidos: 'SUELTA A MI CHIMUELO', ciudad: 'BOCA DEL PERRO'}
  ];
  constructor() { }
  anyadirAlumno() {
  let id= parseInt(prompt("Dime id"));
  let nombre = prompt("Dime nombre");
  let apellido = prompt("Dime apellido");
  let ciudad = prompt("Dime ciudad");
  let nuevoAlumno = new Alumno(id,apellido,nombre,ciudad);
  this.alumnos.push(nuevoAlumno);

   }

  ngOnInit() {
  }

}
