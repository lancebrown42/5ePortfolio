import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  tabs: MenuItem[] = [
    {label: "Home", icon: PrimeIcons.HOME, routerLink: ["home"]},
    {label: "Sheet", icon: PrimeIcons.FILE, routerLink: ["sheet"]}
  ]
}
