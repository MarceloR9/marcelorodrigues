import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //Injeção do gerenciador de idiomas
  langService = inject(LanguageService);
  modalService = inject(ModalService);

  changeLanguage(lang: Language){
    this.langService.setLanguage(lang);
  }
}
