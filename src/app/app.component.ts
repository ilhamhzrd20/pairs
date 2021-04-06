import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pairs';
  isOpen = false;

  onClick(): void {
    this.isOpen = true;
  }
}
