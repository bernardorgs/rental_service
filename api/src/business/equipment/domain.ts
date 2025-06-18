import { ulid } from "ulid";

export type EquipmentStatus = 'Available' | 'Unavailable'

interface IEquipmentProps {
    id?: string;
    name: string;
    image: string;
    description: string;
    stockAmount: number;
}

export class Equipment {
    readonly id: string;
    name: string;
    image: string;
    description: string;
    private _stockAmount!: number;
    private _status!: EquipmentStatus;

    constructor({
        id, name, image, description, stockAmount
    }: IEquipmentProps) {
        this.id = id || ulid();
        this.name = name;
        this.image = image;
        this.description = description;
        this.stockAmount = stockAmount;
    }

    get status(): EquipmentStatus {
        return this._status;
    }

    get stockAmount(): number {
        return this._stockAmount;
    }

    set stockAmount(amount: number) {
        if (amount < 0) {
            throw new Error('Amount must be a positive integer.');
        }

        this._stockAmount = amount;
        this._status = this._stockAmount > 0 ? 'Available' : 'Unavailable';
    }

    increaseAmount(amount: number): void {
        this.stockAmount = this._stockAmount + amount;
    }

    decreaseAmount(amount: number): void {
        if (amount < 0) {
            throw new Error('Amount must be a positive integer.');
        }

        if (amount > this._stockAmount) {
            throw new Error('Amount exceed stock available.');
        }

        this.stockAmount = this._stockAmount - amount;
    }
}