import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SheetComponent} from './sheet/sheet.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sheet", component: SheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
