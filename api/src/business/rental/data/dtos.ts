export interface RentalRequestDTO {
    amount: number;
    rentalDate: Date;
    returnDate: Date;

    userId: string;
    equipmentId: string;
}

export interface RentalResponseDTO {
    id: string;
    amount: number;
    status: string;
    rentalDate: Date;
    returnDate: Date;
    userId: string;
    equipment: {
        id: string;
        name: string;
    }
}

