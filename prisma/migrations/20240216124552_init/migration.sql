/*
  Warnings:

  - The primary key for the `SiteRating` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "SiteRating" DROP CONSTRAINT "SiteRating_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SiteRating_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SiteRating_id_seq";
