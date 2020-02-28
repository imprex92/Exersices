import { Injectable } from '@angular/core';
import { Cities } from './smartCityList/cities'
@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  data: Cities[] = [
		{ name: 'Göteborg' },
		{ name: 'Helsingborg' },
		{ name: 'Rom' },
		{ name: 'Sydney'}
  ];
  getCities(): Cities[] {
		return this.data;
	}
  addNewCity(cityName: string) {
		let cityObject = { name: cityName };
		this.data.push(cityObject);
	}
	deleteCity(cityName: string) {
    this.data = this.data.filter( cities => cities.name !== cityName );
	}
  
constructor() { }

}
