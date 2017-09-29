import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Injectable } from "@angular/core";



function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return "";
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

@Injectable()
export class MyNgbDateParserFormatter extends NgbDateParserFormatter {
		datePipe = new DatePipe('pt-BR');

		parse(value: string): NgbDateStruct {
			let returnVal: NgbDateStruct;
			if (!value) {
				returnVal = null;
			} else {
				try {
					let dateParts = this.datePipe.transform(value, 'M-d-y').split('-');
					returnVal = { year: parseInt(dateParts[2]), month: parseInt(dateParts[0]), day: parseInt(dateParts[1]) };
				} catch (e) {
					returnVal = null;
				}
			}
			return returnVal;
		}

		format(date: NgbDateStruct): string {
			if (date === null) {
				return '';
			}
			try {
				return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'shortDate');
			} catch (e) {
				return '';
			}
		}

		formatForServer(date: NgbDateStruct): string {
			if (date === null) {
				return '';
			}
			try {
				return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'y-MM-dd');
			} catch (e) {
				return '';
			}
		}
}


// import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { DatePipe } from '@angular/common';
//
// export class MyNgbDateParserFormatter extends NgbDateParserFormatter {
// 	datePipe = new DatePipe('pt-BR');
// 	constructor(
// 		private dateFormatString: string) {
// 		super();
// 	}
// 	format(date: NgbDateStruct): string {
// 		if (date === null) {
// 			return '';
// 		}
// 		try {
// 			return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), this.dateFormatString);
// 		} catch (e) {
// 			return '';
// 		}
// 	}
// 	formatForServer(date: NgbDateStruct): string {
// 		if (date === null) {
// 			return '';
// 		}
// 		try {
// 			return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'y-MM-dd');
// 		} catch (e) {
// 			return '';
// 		}
// 	}
// 	parse(value: string): NgbDateStruct {
// 		let returnVal: NgbDateStruct;
// 		if (!value) {
// 			returnVal = null;
// 		} else {
// 			try {
// 				let dateParts = this.datePipe.transform(value, 'M-d-y').split('-');
// 				returnVal = { year: parseInt(dateParts[2]), month: parseInt(dateParts[0]), day: parseInt(dateParts[1]) };
// 			} catch (e) {
// 				returnVal = null;
// 			}
// 		}
// 		return returnVal;
// 	}
// }
