import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, CurrencyPipe  } from '@angular/common'
import { InvestmentResult } from './investment-result.model';
import { InvestmentCalculatorService } from './investment-calculator.service'

@Component({
  selector: 'investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent implements OnInit {
   annualData: Array<InvestmentResult> = [];

   constructor(private investmentCalculatorService: InvestmentCalculatorService) { }
  
   ngOnInit(): void {
    this.investmentCalculatorService.investmentResults$.subscribe(res => {
       this.annualData = res 
    });
  }
}