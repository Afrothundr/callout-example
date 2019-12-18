import { Component } from '@angular/core';
import { Callout } from './form/callout.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'callout-example';
  formValues: Callout = {
    metric: 'Crime Type: Property Crime',
    metricColor: '#333333',
    subject: 'Kansas City, MO',
    subjectColor: '#333333',
    value: '21236',
    valueColor: '#0075A4',
    unit: 'Offenses',
    unitColor: '#333333',
    icon: 0,
    iconColor: '#0075A4'
  }

  updateForm(newValues) {
    this.formValues = newValues;
    console.log(newValues);
  }
}
