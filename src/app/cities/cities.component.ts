import { Component, OnInit, EventEmitter } from '@angular/core';
import { Cities } from './smartCityList/cities';
import {CitiesService} from './cities.service';

@Component({
	selector: 'app-cities',
	templateUrl: './cities.component.html',
	styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
	data: Cities[] = [];
	constructor(public citiesService: CitiesService) { }

	ngOnInit() {
		this.data = this.citiesService.getCities()
	}
	addNewCity(name: string): void {
		console.log('addNewCity', name);
		let citiesObject = { name: name };
		this.data.push(citiesObject);
	}
	handleDelete(cityName: string):void {
		this.data = this.data.filter( cities => cities.name !== cityName );
		console.log('handleDelete: new list = ', this.data);
	}
}
