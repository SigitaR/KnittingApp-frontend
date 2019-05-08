import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewpostComponent } from './newpost/newpost.component';
import { AuthGuard } from '../auth.guard';
import { MyPostsComponent } from './my-posts/my-posts.component';


export const routes: Routes = [
  { path: 'newpost', component: NewpostComponent, canActivate: [AuthGuard] },
  { path: 'myposts', component: MyPostsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KnittersRoutingModule { }
