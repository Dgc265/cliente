import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyrigth',
  templateUrl: './copyrigth.component.html',
  styleUrls: ['./copyrigth.component.css']
})
export class CopyrigthComponent implements OnInit {
  copyright: String = '© Curso DAW 2 2018-2019';
  hoy: any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
