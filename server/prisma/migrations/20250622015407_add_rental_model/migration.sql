-- CreateEnum
CREATE TYPE "RentalStatus" AS ENUM ('active', 'finished', 'canceled');

-- CreateTable
CREATE TABLE "rentals" (
    "id" TEXT NOT NULL,
    "status" "RentalStatus" NOT NULL,
    "amount" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "return_date" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "equipments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
