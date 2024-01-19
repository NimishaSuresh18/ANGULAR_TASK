import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DeferComponent } from './defer/defer.component';

export const routes: Routes = [
  {path:'control',component:ControlFlowComponent},
  {path:'defer',component:DeferComponent}
];
