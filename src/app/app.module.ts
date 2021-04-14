import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RootComponent, DateTimeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
