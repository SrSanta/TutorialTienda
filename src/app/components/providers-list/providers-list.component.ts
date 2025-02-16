import { Component } from '@angular/core';
import { Provider } from '../../models/providers';
import { ProvidersService } from '../../services/providers.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-providers-list',
  imports: [RouterLink],
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.css'
})

export class ProvidersListComponent {
  providers: Provider[] = [];

  constructor(private providersService: ProvidersService) { }

  ngOnInit(): void {
   this.providersService.getProviders().subscribe((providerService) => {
    this.providers = providerService;
  });
  }
}
