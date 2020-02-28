import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cities } from '../smartCityList/cities'
@Component({
	selector: 'app-citylistitem',
	templateUrl: './citylistitem.component.html',
	styleUrls: ['./citylistitem.component.css']
})
export class CitylistitemComponent implements OnInit {

	@Input() city: Cities = { name: '???' };
	@Output() deleteCity = new EventEmitter<string>();
	onDeleteCtiy(){
		this.deleteCity.emit(this.city.name);
	}
	constructor() { }

	ngOnInit() {
	}

}
