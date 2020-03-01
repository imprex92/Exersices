import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cities } from './cities';
import {CitiesService} from '../cities.service';

@Component({
	selector: 'app-smartCityList',
	templateUrl: './smartCityList.component.html',
	styleUrls: ['./smartCityList.component.css']
})
export class SmartCityListComponent implements OnInit {
	
	@Input() data: Cities[] = [];
	@Output() deleteCity = new EventEmitter<string>();
	constructor(public citiesService: CitiesService) { }

	handleDelete(cityName: string){
		this.deleteCity.emit(cityName);
	}
	ngOnInit() {
	}

}
