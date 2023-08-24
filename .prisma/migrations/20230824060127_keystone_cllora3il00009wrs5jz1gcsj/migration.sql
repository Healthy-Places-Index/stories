-- AlterTable
ALTER TABLE "Indicator" ADD COLUMN     "year" INTEGER,
ADD COLUMN     "source" TEXT,
ADD COLUMN     "url" TEXT;

-- CreateTable
CREATE TABLE "_Indicator_geographies_many" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Indicator_geographies_many_AB_unique" ON "_Indicator_geographies_many"("A", "B");

-- CreateIndex
CREATE INDEX "_Indicator_geographies_many_B_index" ON "_Indicator_geographies_many"("B");

-- AddForeignKey
ALTER TABLE "_Indicator_geographies_many" ADD FOREIGN KEY ("A") REFERENCES "Geography"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Indicator_geographies_many" ADD FOREIGN KEY ("B") REFERENCES "Indicator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
