import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-citylistitem',
	templateUrl: './citylistitem.component.html',
	styleUrls: ['./citylistitem.component.css']
})
export class CitylistitemComponent implements OnInit {

	@Input() cityName: string = '???'

	constructor() { }

	ngOnInit() {
	}

}
