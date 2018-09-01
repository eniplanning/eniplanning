import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  	selector: 'planning-right-panel',
  	templateUrl: './right-panel.component.html',
  	styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

	public calendarDisplayRange: string;
	data: {dateDebut: string, dateFin: string, libelle: string}[]

	@ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;

	months = [
		{year: 2018, month: 1},
		{year: 2018, month: 2},
		{year: 2018, month: 3},
		{year: 2018, month: 4},
		{year: 2018, month: 5},
		{year: 2018, month: 6},
		{year: 2018, month: 7},
		{year: 2018, month: 8},
		{year: 2018, month: 9},
		{year: 2018, month: 10},
		{year: 2018, month: 11},
		{year: 2018, month: 12}
	];
	
  	constructor() {}

 	ngOnInit() {
 		this.calendarDisplayRange = "12";

		//fetch data from server
		this.data = [
			{dateDebut: '2018-02-05', dateFin: '2018-02-09', libelle: 'Java1'},
			{dateDebut: '2018-04-09', dateFin: '2018-04-20', libelle: 'Java2'},
			{dateDebut: '2018-05-25', dateFin: '2018-05-21', libelle: 'PHP'}
		]
  	}

  	setCalendarDisplayRange(months) {
		this.calendarDisplayRange = months;
	}

	wheeled(event) {
		if (event.wheelDelta > 0) {
			//mousewheel bottom (toward user) : scroll right
			this.scroll.nativeElement.scrollLeft -= document.getElementsByClassName('table-container')[0].scrollWidth / 12;
		} else {
			//mousewheel top (toward screen) : scroll left
			this.scroll.nativeElement.scrollLeft += document.getElementsByClassName('table-container')[0].scrollWidth / 12;
		}
	}

	generateDate(year, month, day) {
		if(typeof day === "undefined") {
	        day = 1;
	    }
	    //new Date() is 0-based for months. Our data is 1-based. So we decrease by 1
	    return new Date(year, month-1, day);
  	}
  
  	generateDaysOfMonth(year, month) {
		let l = []
		//We do not decrease by 1 because we take the next month's day number 0 (= our month last day)
		//Because the variable month is already 1 higher, we can use it as-is
		for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
			l.push(i);
    	}
		return l;
  	}
  
  	isWeekEnd(year, month, day) {
		//new Date() is 0-based for months. Our data is 1-based. So we decrease by 1
		let d = new Date(year, month-1, day).getDay();
		return d == 6 || d == 0; //6 = Saturday, 0 = Sunday
  	}
  
  	formatCellId(year, month, day) {
		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;
		return '' + year + month + day;
	}

}
