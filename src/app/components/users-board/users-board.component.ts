import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { DataService } from 'src/app/data.service';
import { User } from 'src/app/models/user/users.model';

@Component({
  selector: 'users-board',
  templateUrl: './users-board.component.html',
  styleUrls: ['./users-board.component.css']
})
export class UsersBoardComponent implements AfterViewInit, OnInit {
  @ViewChild('filter') filter: ElementRef | undefined;
  public users: User[] = [];
  public images: any = {};
  public filterSubscription: Subscription | undefined;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.initData();
    this.service.getImages().subscribe(res => {
      this.images = res;
    })
  }

  ngAfterViewInit(): void {
  }

  initData() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  


}
