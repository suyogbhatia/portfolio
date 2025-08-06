import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar {
  private themeService = inject(ThemeService);
  
  isMenuOpen = false;

  // Expose theme service computed values directly
  public readonly currentTheme = this.themeService.currentTheme;
  public readonly themeIcon = this.themeService.themeIcon;
  public readonly ariaLabel = this.themeService.ariaLabel;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
} 