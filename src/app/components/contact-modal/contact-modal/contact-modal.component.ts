import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  modalService = inject(ModalService);
  langService = inject(LanguageService);

  // Insira seus dados reais aqui
  public whatsappUrl = 'https://wa.me/5513997993094';
  public emailUrl = 'mailto:marcelo.mdsr09@gmail.com';

  isEnglish(): boolean {
    return this.langService.text().viewCode === 'View Code';
  }
}
