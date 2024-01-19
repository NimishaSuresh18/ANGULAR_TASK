import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isbutton: boolean = true;
  toggle() {
    this.isbutton = !this.isbutton;
  }
  domain: string[] = ['Dotnet', 'Angular', 'Java'];
}
