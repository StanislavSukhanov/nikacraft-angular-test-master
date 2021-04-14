import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateTimeComponent } from './components/date-time/date-time.component';

const routes: Routes = [{
  path: '',
  component: DateTimeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
