import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { FormsModule } from '@angular/forms';
import { TabMenu, TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabMenuModule,
    // TabMenu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
