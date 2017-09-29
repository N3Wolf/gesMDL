import { Component, OnInit } from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-config',
  templateUrl: './datepicker-config.component.html',
  styleUrls: ['./datepicker-config.component.css'],
  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers
})
export class DatepickerConfigComponent implements OnInit {


  model;

  constructor(config: NgbDatepickerConfig) {

    // customize default values of datepickers used by this component tree
     config.minDate = {year: 1900, month: 1, day: 1};
     config.maxDate = {year: 2099, month: 12, day: 31};

     // days that don't belong to current month are not visible
     config.outsideDays = 'hidden';
}

  ngOnInit() {
  }

}
