import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void',
        style({
        opacity: 0
      })),
      transition('void <=> *', animate('3s 2s ease-in')),
    ])
  ]
})
export class AboutComponent implements OnInit {
@Output() showAllComponents = new EventEmitter();
cubeTurned = false;
items = [
  {
    title: 'UX Designer',
    icon: '../../assets/svgs/format_paint-24px.svg'
  },
  {
    title: 'Frontend Developer',
    icon: '../../assets/svgs/code-24px.svg'
  },
  {
    title: 'Developing Web & Mobile Apps',
    icon: '../../assets/svgs/important_devices-24px.svg'
  },
  {
    title: 'Built With Love',
    icon: '../../assets/svgs/heart-regular.svg'
  }
];
  constructor() { }

  ngOnInit() {
  }

  turnCube() {
    this.cubeTurned = true;
    this.showAllComponents.emit(this.cubeTurned);
  }
}
