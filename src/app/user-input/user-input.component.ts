import { Component } from '@angular/core';
import { InvestmentCalculatorService } from '../investment-results/investment-calculator.service';
import { UserInput } from './user-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  public userInput: UserInput = new UserInput();

  public constructor(private investmentCalculatorService: InvestmentCalculatorService) { }

  public onCalculate(){
    this.investmentCalculatorService.calculateInvestments(this.userInput);
  }
}