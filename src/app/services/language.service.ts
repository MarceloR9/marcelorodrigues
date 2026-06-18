import { computed, signal, Injectable } from '@angular/core';
import { translations } from '../shared/i18n.data';


export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Sinal reativo padrão em português
  private currentLanguage = signal<Language>('pt');

  // Computed que atualiza todos os textos do site dinamicamente ao mudar o sinal
  text = computed(() => translations[this.currentLanguage()]);

  getLanguage(): Language{
    return this.currentLanguage();
  }

  setLanguage(lang: Language){
    this.currentLanguage.set(lang)
  }
}
