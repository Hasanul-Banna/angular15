import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xplore-angular';
  parentText = 'parent to child';
  compos: number[] = [99, 88]

  handleRcvOutput(value: string): void {
    this.parentText = value;
  }
}
