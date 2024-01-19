import { Component } from '@angular/core';
import { ControlFlowComponent } from "../control-flow/control-flow.component";

@Component({
    selector: 'app-defer',
    standalone: true,
    templateUrl: './defer.component.html',
    styleUrl: './defer.component.css',
    imports: [ControlFlowComponent]
})
export class DeferComponent {

}
