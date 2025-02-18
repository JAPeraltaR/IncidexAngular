import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  @Input()
  public routes?: String[];

}
