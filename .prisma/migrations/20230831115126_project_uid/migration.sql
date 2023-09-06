/*
  Warnings:

  - You are about to drop the column `termsAccepted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `privacyAccepted` on the `User` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[uid]` on the table `Project`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "uid" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "termsAccepted",
DROP COLUMN "privacyAccepted";

-- CreateIndex
CREATE UNIQUE INDEX "Project.uid_unique" ON "Project"("uid");
