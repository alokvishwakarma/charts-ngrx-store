import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <h5>{{ name() }} </h5> `,
  standalone: true,
})
export class HeaderComponent {
  readonly name = input<string>(undefined);
}
