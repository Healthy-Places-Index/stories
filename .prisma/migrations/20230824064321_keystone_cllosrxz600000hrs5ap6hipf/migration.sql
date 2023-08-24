/*
  Warnings:

  - You are about to drop the `_Geography_indicators_many` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Geography_indicators_many" DROP CONSTRAINT "_Geography_indicators_many_A_fkey";

-- DropForeignKey
ALTER TABLE "_Geography_indicators_many" DROP CONSTRAINT "_Geography_indicators_many_B_fkey";

-- DropTable
DROP TABLE "_Geography_indicators_many";
