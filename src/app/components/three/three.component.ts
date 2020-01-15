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
    this.players = this._playersService.getPlayers();
    console.log(this.players);
  }

  buscarPlayer(){
    console.log(this.playerSearch)
    this.players = this._playersService.searchPlayers(this.playerSearch);
  }

}
