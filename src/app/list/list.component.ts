import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  label: string[]=['Label','Label','Label'];
  constructor() { }

  ngOnInit(): void {
  }

}
