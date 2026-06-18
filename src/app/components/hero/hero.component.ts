import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // Injeção do sistema de idiomas baseado em Signals
  langService = inject(LanguageService);
  modalService = inject(ModalService);
}
