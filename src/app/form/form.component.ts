import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //value declaration
  value1 = "Value 1";
  value2 = "Value 2";
  value3 = "Value 3";
  constructor() { }

  ngOnInit(): void {
  }

}
