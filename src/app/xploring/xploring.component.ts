import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xploring',
  templateUrl: './xploring.component.html',
  styleUrls: ['./xploring.component.scss']
})
export class XploringComponent implements OnInit {
  id: number = 10
  title: string = 'XploringComponent'
  isDisabled: boolean = false
  color: string = 'black'
  constructor() {
    Math.random() > .5 ? this.color = 'green' : this.color = 'red'
    setTimeout(() => {
      this.isDisabled = true
    }, 0);
  }
  ngOnInit(): void {
    // Math.random() > .5 ? this.color = 'green' : this.color = 'red'
  }
  handleChange(e: Event) {
    const { value, name } = (<HTMLInputElement>e.target)
    this.title = value
  }
  getID(): number { return this.id }
  getColor(): string { return Math.random() > .5 ? 'red' : 'green' }
  changeTitle(): void { this.title = "woohooo! title has changed!" }
}
