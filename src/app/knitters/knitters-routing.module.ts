import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewpostComponent } from './newpost/newpost.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from '../auth.guard';


export const routes: Routes = [
  { path: 'newpost', component: NewpostComponent, canActivate: [AuthGuard] },
  { path: 'allposts', component: PostsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KnittersRoutingModule { }
