import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path:'user-list',component:UserListComponent},
  {path:'updateuser/:id',component:UpdateuserComponent},
 { path: '',redirectTo:'user',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
