import { Component } from '@angular/core';
import { Callout } from './form/callout.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'callout-example';
  formValues: Callout = environment.intialValues;

  updateForm(newValues) {
    this.formValues = newValues;
  }
}
