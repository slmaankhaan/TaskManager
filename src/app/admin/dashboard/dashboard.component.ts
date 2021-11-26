import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  // constructor() { }

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.PendingTasks = 2113507;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      'ABC Infotech Limited',
      'DEF Software Solutions',
      'GHI Industries',
    ];

    this.Projects = ['A', 'B', 'C', 'D'];

    this.Years = [2021, 2020, 2019, 2018];

    this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers = [
      {
        Region: 'EAST',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Busy' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 1, Name: 'Anna', Status: 'Available' },
          { ID: 2, Name: 'Arun', Status: 'Available' },
          { ID: 3, Name: 'Varun', Status: 'Busy' },
          { ID: 4, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 1, Name: 'Kirshna', Status: 'Available' },
          { ID: 2, Name: 'Mohan', Status: 'Busy' },
          { ID: 3, Name: 'Raju', Status: 'Available' },
          { ID: 4, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 1, Name: 'Jacob', Status: 'Busy' },
          { ID: 2, Name: 'Smith', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }

  onProjectChange($event: any) {
    // if ($event.target.innerHTML == 'A') {
    //   this.ProjectCost = 2113507;
    //   this.CurrentExpenditure = 967889;
    //   this.AvailableFunds = 52436;}
    if ($event.target.innerHTML == 'B') {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 10987;
      this.AvailableFunds = 129456;
    } else if ($event.target.innerHTML == 'C') {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML == 'D') {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
