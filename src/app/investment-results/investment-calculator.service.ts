import { Injectable } from '@angular/core';
import { InvestmentResult } from './investment-result.model';
import { UserInput } from '../user-input/user-input.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculatorService {
  private investmentResults = new BehaviorSubject<InvestmentResult[]>([]);
  public investmentResults$ = this.investmentResults.asObservable();

  public calculateInvestments(userInput: UserInput) {
    const annualData: InvestmentResult[] = [];
    let investmentValue = userInput.initialInvestment; 
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      annualData.push(
          new InvestmentResult(
            year,
            interestEarnedInYear,
            investmentValue,
            userInput.annualInvestment,
            totalInterest,
            userInput.initialInvestment + userInput.annualInvestment * year
        )
      );
      this.investmentResults.next(annualData);
    }
  }
}