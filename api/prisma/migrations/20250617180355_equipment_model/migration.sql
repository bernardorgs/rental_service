-- CreateEnum
CREATE TYPE "EquipmentStatus" AS ENUM ('Available', 'Unavailable');

-- CreateTable
CREATE TABLE "equipments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "stock_amount" INTEGER NOT NULL,
    "status" "EquipmentStatus" NOT NULL,

    CONSTRAINT "equipments_pkey" PRIMARY KEY ("id")
);
