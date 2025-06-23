-- CreateTable
CREATE TABLE "equipments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "is_available" BOOLEAN NOT NULL,

    CONSTRAINT "equipments_pkey" PRIMARY KEY ("id")
);
