/*
  Warnings:

  - You are about to drop the column `year` on the `Slide` table. All the data in the column will be lost.
  - You are about to drop the column `opacity` on the `Slide` table. All the data in the column will be lost.
  - You are about to drop the column `basemap` on the `Slide` table. All the data in the column will be lost.
  - You are about to drop the `Basemap` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Layer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Slide_layers_many` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Slide_layers_many" DROP CONSTRAINT "_Slide_layers_many_A_fkey";

-- DropForeignKey
ALTER TABLE "_Slide_layers_many" DROP CONSTRAINT "_Slide_layers_many_B_fkey";

-- DropForeignKey
ALTER TABLE "Slide" DROP CONSTRAINT "Slide_basemap_fkey";

-- AlterTable
ALTER TABLE "Slide" DROP COLUMN "year",
DROP COLUMN "opacity",
DROP COLUMN "basemap",
ADD COLUMN     "indicator" INTEGER,
ADD COLUMN     "geography" INTEGER;

-- CreateTable
CREATE TABLE "Geography" (
    "id" SERIAL NOT NULL,
    "layer" TEXT,
    "title" TEXT,
    "ordering" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicator" (
    "id" SERIAL NOT NULL,
    "varname" TEXT,
    "title" TEXT,
    "domain" TEXT,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "Basemap";

-- DropTable
DROP TABLE "Layer";

-- DropTable
DROP TABLE "_Slide_layers_many";

-- AddForeignKey
ALTER TABLE "Slide" ADD FOREIGN KEY ("indicator") REFERENCES "Indicator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slide" ADD FOREIGN KEY ("geography") REFERENCES "Geography"("id") ON DELETE SET NULL ON UPDATE CASCADE;
