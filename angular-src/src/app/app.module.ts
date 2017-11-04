import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketRequestComponent } from './components/ticket-request/ticket-request.component';
import { TicketProgressComponent } from './components/ticket-progress/ticket-progress.component';
import { TicketAdminComponent } from './components/ticket-admin/ticket-admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketRequestComponent,
    TicketProgressComponent,
    TicketAdminComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
