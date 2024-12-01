export class InvestmentResult {
    constructor(
        public year: number,
        public interest: number,
        public valueEndOfYear: number,
        public annualInvestment: number,
        public totalInterest: number,
        public totalAmountInvested: number
    ) { }
}