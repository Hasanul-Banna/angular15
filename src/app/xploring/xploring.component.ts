import { DemoObjectModel } from './demoObj.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() item: number
  @Input() parentText: string;

  outputTitle: string = 'outputTitle'
  @Output() parentTextOutput  = new EventEmitter<string>()
  handleOutputClick(arg: string): void {
    this.parentTextOutput.emit(arg);
  }

  constructor() {
    Math.random() > .5 ? this.color = 'green' : this.color = 'red'
    setTimeout(() => {
      this.isDisabled = true
    }, 0);
  }
  ngOnInit(): void { }

  handleChange(e: Event) {
    const { value, name } = (<HTMLInputElement>e.target)
    this.title = value
  }
  changeTitle(arg?: any): void {
    console.log(arg)
    this.title = "woohooo! title has changed!"
  }
}
