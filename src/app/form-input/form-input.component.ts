import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form:NgForm): void{
    console.log("Submit Button");
    alert("Alert")
    console.log(form.value)
  }

}
