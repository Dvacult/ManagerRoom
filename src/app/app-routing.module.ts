import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'edit-user', loadChildren: './edit-user/edit-user.module#EditUserPageModule' },
  { path: 'viewer-room', loadChildren: './viewer-room/viewer-room.module#ViewerRoomPageModule' },  { path: 'request', loadChildren: './request/request.module#RequestPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
