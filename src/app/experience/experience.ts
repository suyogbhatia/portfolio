import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-experience',
  imports: [Navbar],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {
  // Component is now properly formatted for Angular 20
}
