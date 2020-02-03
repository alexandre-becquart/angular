import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  /* ------------------------------- san service ------------------------------ */

  // url = 'http://localhost:3000/posts'
  /* -------------------------------------------------------------------------- */

  posts;

  constructor(private service: PostsService) { // promise pour faire des requêtes

    //http.get('https://jsonplaceholder.typicode.com/posts')

    // http.get(this.url)
    //   .subscribe(response => {
    //     console.log(response);
    //     this.posts = response;
    //     this.posts.reverse();
    //   })
  }

  ngOnInit() {
    this.getPost()
  }

  getPost() {
    this.service.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.posts = response;
          this.posts.reverse();
        }
        //,
        // (error: Response) => {

        //   if (error.status == 404) {
        //     alert('La page est introuvable')
        //   } else {

        //     alert("Unexpected Error"),
        //   }
        //   console.log(error);
        // }
      )
  }

  // create - post
  createPost(input: HTMLInputElement) {
    //console.log(input.value);

    let newPost = {
      userID: 1,
      //id: 500, // il génère un id automatique
      title: input.value,
      body: "lorem trolololo"
    }

    input.value = '';



    /* ------------------------------ sans service ------------------------------ */

    // this.http.post(this.url, newPost, httpOptions)
    //   .subscribe(response => {
    //     //console.log(response);

    //     this.posts.splice(0, 0, response)

    //   })
    /* -------------------------------------------------------------------------- */

    this.service.create(newPost)
      .subscribe(response => {
        //console.log(response);
        this.getPost()
      })

  }

  updatePost(post) {
    let updatedPost = {
      title: "MODIFIE : " + post.title,
      id: post.id
    }
    this.service.update(updatedPost)

      .subscribe(response => {
        // console.log(response);
        this.getPost()
      })
  }

  deletePost(post) {
    this.service.delete(post)

      .subscribe(() => {
        console.log("c'est supprimé !");
        this.getPost()
      })
  }

}
