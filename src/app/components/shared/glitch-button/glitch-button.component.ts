import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glitch-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glitch-button.component.html',
  styleUrl: './glitch-button.component.scss'
})
export class GlitchButtonComponent {
  @Input() text: string = '';
  @Input() styles: { [key: string]: string } = {};
}
