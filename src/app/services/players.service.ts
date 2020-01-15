import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//Traer modelo
import { Player } from '../models/player';

import dataJSON from '../data/players.json';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() {
    console.log('Servidor de Players iniciado');
  }

  getPlayers(){
    return new Observable<Player[]>((observer) => {
                return observer.next(dataJSON);
            });
  }

  searchPlayers( termino ){

    let playerArr:Player[] = [];

    termino = termino.toLowerCase();

    for( let player of dataJSON ){
      // console.log(player);
      let name = player.name.toLowerCase();

      if( name.indexOf( termino ) >= 0 ) {
        playerArr.push(player)
      }
    }

    return new Observable<Player[]>((observer) => {
                return observer.next(playerArr);
            });
  }

}
