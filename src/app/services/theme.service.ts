import { Injectable, signal, computed, inject } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal to track current theme with system preference as default
  private readonly _currentTheme = signal<Theme>(this.getSystemTheme());
  
  // Public readonly signal for theme state
  public readonly currentTheme = this._currentTheme.asReadonly();
  
  // Computed values for reactive UI updates
  public readonly themeIcon = computed(() => 
    this._currentTheme() === 'light' ? '☀️':'🌙' 
  );
  
  public readonly ariaLabel = computed(() => 
    `Switch to ${this._currentTheme() === 'light' ? 'dark' : 'light'} mode`
  );



  constructor() {
    this.applyThemeToDocument(this._currentTheme());
  }

  private getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  public toggleTheme(): void {
    const newTheme = this._currentTheme() === 'light' ? 'dark' : 'light';
    this._currentTheme.set(newTheme);
    this.applyThemeToDocument(newTheme);
  }

  private applyThemeToDocument(theme: Theme): void {
    // Apply theme class to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
} 