import { Component, OnInit } from '@angular/core';
import {Alumno} from '../alumno.modelo';
@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
 alumno1 = new Alumno(1, 'David', 'García Cabeza', 'De la terreta');
  constructor() { }

  ngOnInit() {
  }

}
