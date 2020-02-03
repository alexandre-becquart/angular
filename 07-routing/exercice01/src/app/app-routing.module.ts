import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FollowersDetailsComponent } from './followers-details/followers-details.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:login/:id',
    // le chemin le plus précis en premier
    component: FollowersDetailsComponent
  },
  {
    path: 'followers',
    component: FollowersComponent
  },

  {
    path: 'post',
    component: PostsComponent
  },

  {
    path: '**',
    // obligatoirement en dernier
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
