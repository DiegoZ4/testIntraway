import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styles: []
})
export class TwoComponent implements OnInit {

  private teams:any[] = [
    {
      ID:1,
      Name:'Barcelona',
      Type:'España',
      Value:310
    },
    {
      ID:2,
      Name:'Real Madrid',
      Type:'España',
      Value:300
    },
    {
      ID:3,
      Name:'River Plate',
      Type:'Argentina',
      Value:290
    },
    {
      ID:4,
      Name:'Boca Juniors',
      Type:'Argentina',
      Value:280
    },
    {
      ID:5,
      Name:'Juventus',
      Type:'Italia',
      Value:270
    }
    ,
    {
      ID:5,
      Name:'AC Milan',
      Type:'Italia',
      Value:260
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
