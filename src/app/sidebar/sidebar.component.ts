import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() selected = new EventEmitter<string> ();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: string){
    this.selected.emit(value);
  }
}
