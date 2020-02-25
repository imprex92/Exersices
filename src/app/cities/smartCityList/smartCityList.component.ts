import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smartCityList',
  templateUrl: './smartCityList.component.html',
  styleUrls: ['./smartCityList.component.css']
})
export class SmartCityListComponent implements OnInit {
  
  @Input() data = [];

  constructor() { }

  ngOnInit() {
  }

}
