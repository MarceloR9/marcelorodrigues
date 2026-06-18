import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private username = 'MarceloR9';

  // Signal público que os componentes vão consumir
  public repos = signal<GitHubRepo[]>([]);
  public loading = signal<boolean>(true);

  constructor() {
    this.fetchRepositories();
  }

  private fetchRepositories() {
    this.http.get<GitHubRepo[]>(`https://api.github.com/users/${this.username}/repos`)
      .pipe(
        map(repos => {
          // 1. Filtra para não trazer forks de outros repositórios
          // 2. Ordena pelos modificados mais recentemente
          // 3. Pega os 6 principais (ou 3, o que você preferir no grid)
          return repos
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
            .slice(0, 100);
        }),
        catchError(err => {
          console.error('Erro ao buscar repositórios do GitHub', err);
          this.loading.set(false);
          return of([]);
        })
      )
      .subscribe(data => {
        this.repos.set(data);
        this.loading.set(false);
      });
  }
}
