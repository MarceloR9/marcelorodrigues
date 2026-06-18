import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export class AppConfig {
  public static config: ApplicationConfig = {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient() // <- Essencial para a API do GitHub funcionar mais tarde!
    ]
  };
}

export const appConfig = AppConfig.config;
