import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styles: []
})
export class OneComponent implements OnInit {

  name:string;
  isName:boolean;

  constructor() { }

  ngOnInit() {
  }

  toWelcome() {
    this.isName = true;
  }

}
