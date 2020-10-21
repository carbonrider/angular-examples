import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    { name: 'Automobile Private Limited', description: 'Manage auto projects across regions.' },
    { name: 'FreshWater Technology', description: 'Clean and pure water for the masses' },
    { name: 'BringPower Energy', description: 'World\'s biggest renewable project' },
    { name: 'Dreamwire Ltd', description: 'Improve customer satisfaction with highest quality.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onEditClick(): void {
    alert('You clicked edit.');
  }

  onViewClick(): void {
    alert('You clicked view.');
  }

}
