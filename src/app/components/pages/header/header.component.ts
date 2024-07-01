import { Component } from '@angular/core';
import { GlitchButtonComponent } from '../../shared/glitch-button/glitch-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GlitchButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
