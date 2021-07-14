import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForTestingApiService {

   constructor(private http : HttpClient ) { }

  getNames():Observable<GameModel[]>{
    return this.http.get<GameModel[]>('https://virtserver.swaggerhub.com/dhrutijoshi348/MyFirstAPI/1.0.0/games')
  }
  getPlayers():Observable<PlayerModel[]>{
    return this.http.get<PlayerModel[]>('https://virtserver.swaggerhub.com/dhrutijoshi348/MyFirstAPI/1.0.0/players')
  }
}
export interface GameModel{
  id?:String,
  name?:String,
  image?:String
}

export interface PlayerModel{
  id?:String,
  name?:String,
  image?:String
}

}
