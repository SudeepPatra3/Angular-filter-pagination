import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private restService: HttpService) {}
  posts: any[];
  name: any;
  p:number =1;

  ngOnInit() {
    this.restService.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }
  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.posts = this.posts.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
  removePosts(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
}
