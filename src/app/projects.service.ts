import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getAllProject(): Observable<Project[]> {
    // let currentUser = { token: '' };
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', 'Bearer');
    // if (sessionStorage.currentUser != null) {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set('Authorization', 'Bearer' + currentUser.token);
    // }

    return this.httpClient
      .get<Project[]>('/api/projects', { responseType: 'json' })
      .pipe(
        map((data: Project[]) => {
          for (let i = 0; i < data.length; i++) {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        })
      );
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>('api/projects', newProject, {
      responseType: 'json',
    });
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>('api/projects', existingProject, {
      responseType: 'json',
    });
  }

  deleteProject(ProjectId: number): Observable<string> {
    return this.httpClient.delete<string>(
      '/api/projects?ProjectID=' + ProjectId
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      '/api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }
}
