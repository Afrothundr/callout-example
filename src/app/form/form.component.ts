import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { Callout } from './callout.interface';
import { environment } from 'src/environments/environment';

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
      metric: [environment.intialValues.metric],
      metricColor: [environment.intialValues.metricColor],
      subject: [environment.intialValues.subject],
      subjectColor: [environment.intialValues.subjectColor],
      value: [environment.intialValues.value],
      valueColor: [environment.intialValues.valueColor],
      unit: [environment.intialValues.unit],
      unitColor: [environment.intialValues.unitColor],
      icon: [environment.intialValues.icon],
      iconColor: [environment.intialValues.iconColor]
    });

    this.onChanges();
  }

  onChanges() {
    this.calloutForm.valueChanges.pipe(tap(val => {
      this.calloutFormEvent.emit(val);
    })).subscribe();
  }

}
