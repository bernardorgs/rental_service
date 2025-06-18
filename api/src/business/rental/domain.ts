import { ulid } from "ulid";

interface IRentalProps {
    id?: string;
    amount: number;
    rentalDate: Date;
    returnDate: Date;
    userId: string;
    equipmentId: string;
}

export class Rental {
    readonly id: string;
    private _status: 'Active' | 'Finished';
    readonly amount: number;
    readonly rentalDate: Date;
    readonly returnDate: Date;
    readonly userId: string;
    readonly equipmentId: string;

    constructor({
        id, amount, rentalDate, returnDate, userId, equipmentId
    }: IRentalProps) {
        this.validateAmount(amount);
        this.validateDates(rentalDate, returnDate);

        this.id = id || ulid();
        this._status = 'Active';
        this.amount = amount;
        this.rentalDate = rentalDate;
        this.returnDate = returnDate;

        this.userId = userId;
        this.equipmentId = equipmentId;
    }

    // status
    get status(): string {
        return this._status;
    }

    finishRental(): void {
        this._status = 'Finished';
    }

    // amount
    private validateAmount(amount: number): void {
        if (amount <= 0) {
            throw new Error('Amount must be an integer greater than zero.');
        }
    }

    private validateDates(rentalDate: Date, returnDate: Date): void {
        const currentDate = new Date();
        if (rentalDate < currentDate) {
            throw new Error('Rental date must be greater than current date.')
        }

        if (returnDate <= rentalDate) {
            throw new Error('Return date must be greater than rental date.')
        }
    }
}