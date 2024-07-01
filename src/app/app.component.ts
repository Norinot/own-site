import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlitchButtonComponent } from './components/shared/glitch-button/glitch-button.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GlitchButtonComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
