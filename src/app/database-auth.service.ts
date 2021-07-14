import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseAuthService {
  public userData :{ id : String ,
                      name : string}[] = [
                        {
                          id : '1',
                          name : 'dhruti'
                        }
                      ];
  constructor() { }
}
