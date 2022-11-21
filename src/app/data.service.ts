import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { User } from './models/user/users.model';
import { Comment } from './models/user/comments.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  public baseURL: string = `https://jsonplaceholder.typicode.com`;
  public imagesURL: string = `https://picsum.photos/v2/list?page=2&limit=10`;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getUsers(); 
    this.getImages(); 
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`).pipe(
      map((users: User[]) => {
        return users;
      })
    )
  }

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseURL}/comments`).pipe(
      map((comments: Comment[]) => {
        return comments;
      })
    )
  }

  public getImages() {
    return this.http.get(this.imagesURL)
  }
}


