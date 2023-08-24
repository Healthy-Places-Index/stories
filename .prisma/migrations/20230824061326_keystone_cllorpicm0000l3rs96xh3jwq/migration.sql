-- CreateTable
CREATE TABLE "_Geography_indicators_many" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Geography_indicators_many_AB_unique" ON "_Geography_indicators_many"("A", "B");

-- CreateIndex
CREATE INDEX "_Geography_indicators_many_B_index" ON "_Geography_indicators_many"("B");

-- AddForeignKey
ALTER TABLE "_Geography_indicators_many" ADD FOREIGN KEY ("A") REFERENCES "Geography"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Geography_indicators_many" ADD FOREIGN KEY ("B") REFERENCES "Indicator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
