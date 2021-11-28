import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex: any = null;
  searchBy: string = 'ProjectName';
  searchText: string = '';

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
      // ,
      // (error) => {
      //   console.log(error);
      //   alert('Authorization Failed');
      // }
    );
  }

  onSaveClick() {
    this.projectService.insertProject(this.newProject).subscribe(
      (response) => {
        //Add properties to Grid
        let p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        //Clear New Project Dialog - TextBoxes
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      },
      (error) => {
        console.log('error');
      }
    );
  }

  onEditClick(event: any, index: number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        let p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      },
      () => {}
    );
  }

  onDeleteClick(event: any, index: number) {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      () => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.projectID = null;
      },
      () => {
        console.log('error');
      }
    );
  }

  onSearchClick() {
    this.projectService
      .SearchProjects(this.searchBy, this.searchText)
      .subscribe(
        (response: Project[]) => {
          this.projects = response;
        },
        () => {}
      );
  }
}
