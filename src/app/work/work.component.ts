import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works = [
    {
      title: 'Team Resources Dashboard',
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
                   'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                   'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                   'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tech: 'Vue js + Vue Material, Nuxt.js',
      github: ''
    },
    {
      title: 'Team Brochure Website',
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
                   'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                   'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                   'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tech: 'Angular 7 + Bootstrap, Node.js',
      github: ''
    },
    {
      title: 'Front End of Recruitment Application',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
                   'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                   'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                   'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '',
      tech: 'Angular 7 + Bootstrap, Node.js',
      github: '',
    },
    {
      title: 'Admin Dashboard of NLG tool',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
                   'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                   'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                   'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '',
      tech: 'Angular 7 + Angular Material, Node.js',
      github: ''
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
