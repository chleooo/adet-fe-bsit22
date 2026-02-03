import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts = [
    {
      title: 'ADET',
      description: 'Developing Blog Posts List UI in Angular.'
    },
    {
      title: 'OOP',
      description: 'Building Applicationg Development.'
    },
    {
      title: 'NETWORKING',
      description: 'Teambuilding Network Design.'
    }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}