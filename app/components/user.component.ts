import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
    this.name = 'Chase Franklin';
    this.email= 'tylerchasefranklin@gmail.com',
    this.address = {
      street: '308 Holmes St',
      city: 'Greenville',
      state: 'SC'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;


    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
}

  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
