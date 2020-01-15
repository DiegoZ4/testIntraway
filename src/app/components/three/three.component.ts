import { Component, OnInit } from '@angular/core';

//Modelos
import { Player } from '../../models/player'

//Servicios
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styles: []
})
export class ThreeComponent implements OnInit {

  players:Player[] = [];
  playerSearch:string;
  isPlayer:boolean;

  constructor(
    public _playersService:PlayersService,
  ) {
    // console.log(myJSON)
  }

  ngOnInit() {
    this._playersService.getPlayers()
        .subscribe( (response) =>{
          this.players = response;
        })
  }

  buscarPlayer(){
    // console.log(this.playerSearch)
    this._playersService.searchPlayers(this.playerSearch)
        .subscribe( (response) =>{
          this.players = response;
        })
  }

}
