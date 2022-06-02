import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {PostComponent} from "./post/post/post.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {IndexComponent} from "./user/index/index.component";

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'post', component: PostComponent
}, {
  path: 'account',
  children: [
    {
      path: '',
      component: IndexComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    }
  ]
},
  {
    path: '**', redirectTo: '',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
