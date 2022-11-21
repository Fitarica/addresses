import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';
import { Comment } from 'src/app/models/user/comments.model';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit, OnDestroy {
  @Input() public userId!: number;
  public comments: Comment[] = [];
  public userComments: Comment[] = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.initFilteredComments();
  }

  ngOnDestroy(){
    this.service.getComments()
  }

  initFilteredComments() {
    this.service.getComments().subscribe(res => {
      this.comments = res;
      this.userComments = this.comments.filter(comment => comment.postId == this.userId);
    }
    )
  }
}

