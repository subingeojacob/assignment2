import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { TabsComponent } from './tabs/tabs.component';
import { ShowComponent } from './show/show.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IntemployeeComponent } from './intemployee/intemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TabsComponent,
    ShowComponent,
    IntemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
