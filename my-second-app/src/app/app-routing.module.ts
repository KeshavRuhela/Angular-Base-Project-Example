import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { WatchComponent } from './watch/watch.component';
import { Watch2Component } from './watch2/watch2.component';
import { Watch3Component } from './watch3/watch3.component';
import { Watch4Component } from './watch4/watch4.component';

const routes: Routes = [
  { path: '', redirectTo: '/icon1', pathMatch: 'full' },
  { path: 'icon1', component: WatchComponent },
  { path: 'icon2', component: Watch2Component },
  { path: 'icon3', component: Watch3Component },
  { path: 'icon4', component: Watch4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
