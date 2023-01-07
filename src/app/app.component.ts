import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xplore-angular parent to child';
  parentText = 'xplore-angular parent to child';
  compos: number[] = [1, 2]

}
