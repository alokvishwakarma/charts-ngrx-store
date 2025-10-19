import { Component, input } from '@angular/core';



@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  standalone: true,
})


export class RangeComponent  {
  readonly name = input<string>(undefined);
  readonly range30 = input<string>(undefined);
  readonly range60 = input<string>(undefined);
  readonly range90 = input<string>(undefined);

  
}


