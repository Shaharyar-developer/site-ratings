-- CreateTable
CREATE TABLE "Site" (
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "SiteRating" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "userEmail" TEXT NOT NULL,
    "siteUrl" TEXT NOT NULL,

    CONSTRAINT "SiteRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SiteRating" ADD CONSTRAINT "SiteRating_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteRating" ADD CONSTRAINT "SiteRating_siteUrl_fkey" FOREIGN KEY ("siteUrl") REFERENCES "Site"("url") ON DELETE RESTRICT ON UPDATE CASCADE;
