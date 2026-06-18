import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {
  langService = inject(LanguageService);
  modalService = inject(ModalService);
}
