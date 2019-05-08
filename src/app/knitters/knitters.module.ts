import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewpostComponent } from './newpost/newpost.component';
import { KnittersRoutingModule } from './knitters-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { MyPostsComponent } from './my-posts/my-posts.component';

@NgModule({
  declarations: [
    MyPostsComponent,
    NewpostComponent],
  imports: [
    CommonModule,
    KnittersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
})
export class KnittersModule { }







