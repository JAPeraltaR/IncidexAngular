import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'shared-error-page',
  imports: [ MatCardModule, MatButtonModule ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

  private router = inject(Router)

  goHome(){
    this.router.navigateByUrl('')
  }

}
