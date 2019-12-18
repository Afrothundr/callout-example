import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss']
})
export class CustomIconComponent implements OnInit {

  @Input() icon: number;
  @Input() iconColor: string;

  constructor() { }

  ngOnInit() {
  }

}
