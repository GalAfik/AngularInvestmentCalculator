import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  private investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.calculatedData());
}
