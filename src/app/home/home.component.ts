import { Component, OnInit } from '@angular/core';
import { DatabaseAuthService } from '../database-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private db : DatabaseAuthService) { }
  change(){
    console.log(this.db.userData);
  }
  ngOnInit(): void {
  }

}
