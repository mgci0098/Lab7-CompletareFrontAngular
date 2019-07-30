import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmeComponent } from './components/filme/filme.component';
import { UserRoleComponent } from './components/userRole/userRole.component';
import { UsersComponent } from './components/users/users.component';
import { ComentariiComponent } from './components/comentarii/comentarii.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UserasGuard } from './guards/user.guard';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'filme',
        component: FilmeComponent
      },
      {
        path: 'userRoles',
        component: UserRoleComponent
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [UserasGuard],
      },
      {
        path: 'comentarii',
        component: ComentariiComponent
      }
    ]
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
