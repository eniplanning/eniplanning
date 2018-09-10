import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Planning } from '../../../utils/models/planning';
import { PlanningService } from '../../../utils/services/planning.service';

@Component({
  	selector: 'planning-right-panel',
  	templateUrl: './right-panel.component.html',
  	styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

	@ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;

	calendarDisplayRange: 	String = "12";
	selectedPlanning: 		Planning;
	totalHours: 			Number = 0;

	months: any[];

  	constructor(
  		private planningService: 		PlanningService,
  		public changeDetector: 			ChangeDetectorRef
  	) {}

 	ngOnInit() {
 		this.planningService.selectedPlanning.subscribe(
 			//things to do when selectedPlanning is updated
            (planning: Planning) => {
            	this.selectedPlanning = planning;
            	if (this.selectedPlanning == null) {
            		//disable calendar view
            		this.months = null;
            	}
            	else {
            		//constructs variable months to toggle calendar view
	            	let startPlanning = new Date(this.selectedPlanning.date_start_formation);
	            	let endPlanning = new Date(this.selectedPlanning.date_end_formation);
	            	this.months = [];
	            	for (var d = startPlanning; d <= endPlanning; d.setMonth(d.getMonth() + 1)) {
	            		this.months.push({ year: d.getFullYear(), month: d.getMonth() + 1 });
	            	}
	            	this.changeDetector.detectChanges();
            	}
            }
        );
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
