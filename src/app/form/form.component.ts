import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { Callout } from './callout.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() calloutFormEvent: EventEmitter<Callout> = new EventEmitter();

  calloutForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.calloutForm = this.fb.group({
      metric: ['Crime Type: Property Crime'],
      metricColor: ['#333333'],
      subject: ['Kansas City, MO'],
      subjectColor: ['#333333'],
      value: ['21236'],
      valueColor: ['#0075A4'],
      unit: ['Offenses'],
      unitColor: ['#333333'],
      icon: [0],
      iconColor: ['#0075A4']
    });

    this.onChanges();
  }

  onChanges() {
    this.calloutForm.valueChanges.pipe(tap(val => {
      this.calloutFormEvent.emit(val);
    })).subscribe();
  }

}
