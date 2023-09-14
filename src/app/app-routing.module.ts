import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, 
  { path: 'comentarios', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) }, 
  { path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
   { path: 'tareas', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
