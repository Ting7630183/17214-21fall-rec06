import { PaymentAccount } from "./paymentaccount";

class Student extends PaymentAccount {
	
    private gpa: number;

    constructor(accountHolder: string, accountNumber: number, gpa: number) {
        super(accountHolder, accountNumber);
        this.gpa = gpa;
    }

    public getGPA(): number {
        return this.gpa;
    }

    public updateGPA(newGPA: number) {
        this.gpa = newGPA;
    }

    public pay(amount: number): boolean {
        return false; // No payment option.
    }
}