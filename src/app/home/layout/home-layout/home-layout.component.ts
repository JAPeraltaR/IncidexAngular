import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@shared/menu/menu.component';

@Component({
  selector: 'home-layout',
  imports: [ RouterOutlet, MenuComponent ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export default class HomeLayoutComponent {



}
