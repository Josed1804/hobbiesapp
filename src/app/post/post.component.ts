import { Component ,OnInit} from '@angular/core';
import { PostService } from './post.service';
import { Posts } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
    
  posts: Posts[] = [];

  constructor(private elquetraelospostdeinternet: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.elquetraelospostdeinternet.getPost().subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts);
    });
  }

}
