abstract class PaymentAccount {
	private accountName: string;
	private accountNumber: number;

	constructor(accountName: string, accountNumber: number) {
		this.accountName = accountName;
		this.accountNumber = accountNumber;
	}

	public abstract pay(amount: number): boolean;

	public getAccountName(): string {
		return this.accountName;
	}

	public getAccountNumber(): number {
		return this.accountNumber;
	}
}

export { PaymentAccount }