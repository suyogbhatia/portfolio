import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-about',
  imports: [Navbar],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  // Component is now properly formatted for Angular 20
}
