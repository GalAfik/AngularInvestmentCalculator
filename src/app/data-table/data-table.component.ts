import { Component, input } from '@angular/core';
import { type InvestmentCalculatedData } from '../data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  items = input<InvestmentCalculatedData>();
}
