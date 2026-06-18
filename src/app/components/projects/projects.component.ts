import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  langService = inject(LanguageService);
  githubService = inject(GithubService);

  // Controla o índice da página atual do carrossel
  currentPage = signal<number>(0);

  // Quantidade de repositórios por página (3 colunas x 2 linhas = 6 itens)
  readonly itemsPerPage = 6;

  // Agrupa todos os repositórios do serviço em blocos de até 6 itens
  projectPages = computed(() => {
    const allRepos = this.githubService.repos();
    const pages = [];

    for (let i = 0; i < allRepos.length; i += this.itemsPerPage) {
      pages.push(allRepos.slice(i, i + this.itemsPerPage));
    }
    return pages;
  });

  // Retorna apenas os repositórios correspondentes à página ativa
  currentVisibleRepos = computed(() => {
    const pages = this.projectPages();
    return pages.length > 0 ? pages[this.currentPage()] : [];
  });

  // Avança uma página e volta para a primeira (0) se passar do final (Loop Infinito)
  nextPage() {
    const totalPages = this.projectPages().length;
    if (totalPages === 0) return;
    this.currentPage.update(page => (page + 1) % totalPages);
  }

  // Retrocede uma página e pula para a última se for menor que zero (Loop Infinito)
  prevPage() {
    const totalPages = this.projectPages().length;
    if (totalPages === 0) return;
    this.currentPage.update(page => (page - 1 + totalPages) % totalPages);
  }

  // Define a página ativa ao clicar em uma bolinha do menu
  setPage(index: number) {
    this.currentPage.set(index);
  }

  // Método original mantido para retornar o texto de acordo com o idioma
  getProjectDescription(): string {
    const currentText = this.langService.text();

    if (currentText.viewCode === 'View Code') {
      return 'With experience in Full Stack development, I focus on building applications that are both robust and user-friendly. I always aim to align backend performance with modern interfaces.';
    }

    return 'Com experiência em desenvolvimento Full Stack, foco na criação de aplicações que são robustas e fáceis de usar. Busco sempre alinhar a performance do backend com interfaces modernas.';
  }
}
