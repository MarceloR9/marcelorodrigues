import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // Signal que controla a visibilidade do modal (true = aberto, false = fechado)
  public isOpen = signal<boolean>(false);

  open() {
    this.isOpen.set(true);
    // Bloqueia o scroll do fundo enquanto o modal está ativo
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen.set(false);
    // Restaura o scroll normal da página
    document.body.style.overflow = 'auto';
  }
}
