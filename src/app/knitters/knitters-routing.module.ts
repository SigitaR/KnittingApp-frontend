import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewpostComponent } from './newpost/newpost.component';
import { PostsComponent } from './posts/posts.component';


export const routes: Routes = [
  { path: 'newpost', component: NewpostComponent },
  { path: 'allposts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KnittersRoutingModule { }
