import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cities',
	templateUrl: './cities.component.html',
	styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
	data = [
		'Göteborg', 'Helsingborg', 'Rom', 'Sydney'
	  ]
	constructor() { }

	ngOnInit() {
	}
	addNewCity(name: string): void {
		console.log('addNewCity', name);
		this.data.push(name);
	}
}
