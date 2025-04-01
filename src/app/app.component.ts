import { Component, output, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataTableComponent } from './data-table/data-table.component';
import { InvestmentCalculatedData, type InvestmentData } from './data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, DataTableComponent],
})
export class AppComponent {
  calculatedData?: InvestmentCalculatedData;

  onCalculateInvestmentResults(data: InvestmentData) {

    console.log(data);
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest = investmentValue - data.annualInvestment * year - data.initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualInvestment * year,
      });
    }

    this.calculatedData = annualData;
  }
}
