import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-child',
  templateUrl: './one-child.component.html',
  styles: []
})
export class OneChildComponent implements OnInit {

  @Input() name:string;

  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }

}
