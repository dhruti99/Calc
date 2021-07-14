import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit { 
  constructor(private fb : FormBuilder) { }
  signUp = this.fb.group({
    fname : [""],
    lname : [""],
    age : [""]
  })
  onSubmit(){
    console.log(this.signUp.value)
  }
  clear(){
    this.signUp.controls['fname'].setValue('fill me up');
  }

  
  ngOnInit(): void {
  }

}
