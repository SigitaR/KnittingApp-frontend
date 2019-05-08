import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { NewpostComponent } from './newpost/newpost.component';
import { KnittersRoutingModule } from './knitters-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [
    PostsComponent,
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







