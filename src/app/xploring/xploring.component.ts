import { DemoObjectModel } from './demoObj.model';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-xploring',
  templateUrl: './xploring.component.html',
  styleUrls: ['./xploring.component.scss']
})
export class XploringComponent implements OnInit {
  demoArray: DemoObjectModel[] = [new DemoObjectModel('banna', 'hasanulbannaSE', 11), new DemoObjectModel('Hbanna', 'hasanulbannaSSE', 12), new DemoObjectModel('HBanna', 'hasanulbannaJSE', 15)]
  title: string = 'XploringComponent'
  isDisabled: boolean = false
  color: string = 'black'
  
  constructor() {
    Math.random() > .5 ? this.color = 'green' : this.color = 'red'
    setTimeout(() => {
      this.isDisabled = true
    }, 0);
  }
  ngOnInit(): void { }
  @Input() parentText:string;

  handleChange(e: Event) {
    const { value, name } = (<HTMLInputElement>e.target)
    this.title = value
  }
  changeTitle(arg?: string): void {
    console.log(arg)
    this.title = "woohooo! title has changed!"
  }
}
