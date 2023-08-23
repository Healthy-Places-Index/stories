-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "institution" TEXT,
    "language" TEXT,
    "verified" BOOLEAN,
    "verifyId" TEXT,
    "resetId" TEXT,
    "isAdmin" BOOLEAN,
    "password" TEXT,
    "termsAccepted" BOOLEAN,
    "privacyAccepted" BOOLEAN,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slide" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "order" INTEGER,
    "size" TEXT,
    "year" INTEGER,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "zoom" DOUBLE PRECISION,
    "bearing" DOUBLE PRECISION,
    "pitch" DOUBLE PRECISION,
    "selectedFeature" TEXT,
    "opacity" DOUBLE PRECISION,
    "media" TEXT,
    "imageTitle" TEXT,
    "source" TEXT,
    "url" TEXT,
    "basemap" INTEGER,
    "project" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "creator" TEXT,
    "source" TEXT,
    "date" TEXT,
    "url" TEXT,
    "slide" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "category" TEXT,
    "imageTitle" TEXT,
    "source" TEXT,
    "url" TEXT,
    "published" BOOLEAN,
    "gallery" BOOLEAN,
    "updatedAt_utc" TIMESTAMP(3),
    "updatedAt_offset" TEXT,
    "createdAt_utc" TIMESTAMP(3),
    "createdAt_offset" TEXT,
    "user" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Layer" (
    "id" SERIAL NOT NULL,
    "layerId" TEXT,
    "title" TEXT,
    "remoteId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basemap" (
    "id" SERIAL NOT NULL,
    "ssid" TEXT,
    "title" TEXT,
    "remoteId" INTEGER,
    "firstYear" INTEGER,
    "lastYear" INTEGER,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "thumbnail" TEXT,
    "creator" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annotation" (
    "id" SERIAL NOT NULL,
    "feature" TEXT,
    "slide" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Slide_layers_many" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_tags_many" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Image_slide_unique" ON "Image"("slide");

-- CreateIndex
CREATE UNIQUE INDEX "Tag.name_unique" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_Slide_layers_many_AB_unique" ON "_Slide_layers_many"("A", "B");

-- CreateIndex
CREATE INDEX "_Slide_layers_many_B_index" ON "_Slide_layers_many"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_tags_many_AB_unique" ON "_Project_tags_many"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_tags_many_B_index" ON "_Project_tags_many"("B");

-- AddForeignKey
ALTER TABLE "Slide" ADD FOREIGN KEY ("basemap") REFERENCES "Basemap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slide" ADD FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD FOREIGN KEY ("slide") REFERENCES "Slide"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annotation" ADD FOREIGN KEY ("slide") REFERENCES "Slide"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Slide_layers_many" ADD FOREIGN KEY ("A") REFERENCES "Layer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Slide_layers_many" ADD FOREIGN KEY ("B") REFERENCES "Slide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_tags_many" ADD FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_tags_many" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
