import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicess',
  templateUrl: './servicess.component.html',
  styleUrls: ['./servicess.component.scss']
})
export class ServicessComponent implements OnInit {
  constructor(private router : Router) { }
  routeTo(a: boolean) {
    if (a == true) {
      this.router.navigate(['/Discounts'])
    }
    else{
      alert('invalid credentials!!')
    }
  }
  ngOnInit(): void {
  }

}
